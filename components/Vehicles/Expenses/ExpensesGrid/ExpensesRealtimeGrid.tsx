"use client";

import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
} from "@mui/x-data-grid";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import EditToolbar from "./EditToolbar";
import { ServiceLog } from "@/components/Lookups/ServiceLogs/ServiceLogs";
import theme from "@/theme";
import Link from "next/link";
import ServiceDialog from "../../Services/ServiceDialog/ServiceDialog";
import {
  deleteExpense,
  Expense,
  updateExpense,
} from "@/components/Lookups/Expenses/Expenses";
import dayjs from "dayjs";
import { getLanguage } from "@/utils/locale";
import ExpenseDialog from "../ExpensesDialog/ExpenseDialog";

interface ExpensesRealtimeGridProps {
  expenses: Expense[];
}

export default function ExpensesRealtimeGrid({
  expenses: vehicleExpenses,
}: ExpensesRealtimeGridProps) {
  const matches = useMediaQuery("(min-width:900px)");

  const supabase = createClient();

  const [expenses, setExpenses] =
    useState<(Expense & { isNew?: boolean })[]>(vehicleExpenses);

  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  useEffect(() => {
    setExpenses(vehicleExpenses);
  }, [vehicleExpenses]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "VehicleExpenses" },
        (payload: { new: Expense }) => {
          setExpenses((expenses) => [...expenses, { ...payload.new }]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [vehicleExpenses]);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    deleteExpense(id as number);

    setExpenses(expenses.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = expenses.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setExpenses(expenses.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false } as Expense & {
      isNew?: boolean;
    };

    setExpenses(
      expenses.map((row) => (row.id === newRow.id ? updatedRow : row))
    );

    let row = Object.fromEntries(
      Object.entries(newRow).filter(([k]) => k !== "isNew" && k !== "id")
    );

    await updateExpense(newRow.id, row);

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const columns: GridColDef[] = [
    {
      field: "expense_date",
      headerName: "Date",
      width: 150,
      type: "dateTime",
      valueFormatter: (value) => dayjs(value).format("DD.MM.YY HH:mm:ss"),
      valueGetter: (value) => value && new Date(value),
    },
    { field: "expense_type", headerName: "Type", width: 100, editable: true },
    {
      field: "cost",
      headerName: "Cost",
      headerAlign: "right",
      align: "right",
      description: "The cost of this expoense",
      width: 130,
      type: "number",
      editable: true,
      valueFormatter: (value, row) => {
        return new Intl.NumberFormat(getLanguage(), {
          style: "currency",
          currency: row.currency,
          currencyDisplay: "narrowSymbol",
        }).format(value);
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "right",
      align: "right",
      width: 130,
      type: "number",
      editable: true,
      valueFormatter: (value, row) => {
        return new Intl.NumberFormat(getLanguage(), {
          style: "unit",
          unit: row.unit || "liter",
          unitDisplay: "narrow",
        }).format(value);
      },
    },
    {
      field: "odometer_reading",
      headerName: "Odometer",
      headerAlign: "right",
      align: "right",
      width: 130,
      type: "number",
      editable: true,
      valueFormatter: (value) => {
        return `${value} km`;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      pinnable: true,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<Save />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<Cancel />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const [expenseId, setExpenseId] = useState<{
    id: number | null;
    open: boolean;
  }>({
    id: null,
    open: false,
  });

  return (
    <Box>
      <ExpenseDialog
        open={expenseId.open}
        id={expenseId.id}
        onClose={() => {
          setExpenseId({ open: false, id: null });
        }}
      />
      {matches ? (
        <DataGrid
          rows={expenses}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          onProcessRowUpdateError={handleError}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: EditToolbar as GridSlots["toolbar"] }}
          slotProps={{
            toolbar: { setExpenses, setRowModesModel },
          }}
        />
      ) : (
        <Grid container spacing={1}>
          {expenses.map((row) => (
            <Grid item key={row.id} xs={12}>
              <Card variant="outlined">
                <CardActionArea
                  onClick={() => {
                    setExpenseId(() => ({ open: true, id: row.id }));
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textTransform="capitalize"
                      >
                        {row.expense_type}
                      </Typography>

                      <Typography gutterBottom variant="h6" component="div">
                        {new Intl.NumberFormat(getLanguage(), {
                          style: "currency",
                          currency: row.currency,
                          currencyDisplay: "narrowSymbol",
                        }).format(row.cost || 0)}{" "}
                      </Typography>
                    </Stack>
                    {row.notes && (
                      <Typography color="text.secondary" variant="body2">
                        {row.notes}
                      </Typography>
                    )}
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        variant="outlined"
                        label={new Intl.NumberFormat(getLanguage(), {
                          style: "unit",
                          unit: row.unit,
                          unitDisplay: "narrow",
                        }).format(row.amount || 0)}
                      />
                    </Stack>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
