"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
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
import { ServiceType } from "../../../Lookups/ServiceTypes/ServiceTypes";
import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import EditToolbar from "./EditToolbar";
import { ServiceLog } from "@/components/Lookups/ServiceLogs/ServiceLogs";
import theme from "@/theme";
import Link from "next/link";
import ServiceDialog from "../ServiceDialog/ServiceDialog";
import { useSelectedLayoutSegments } from "next/navigation";

interface ServicesRealtimeGridProps {
  serviceLogs: ServiceLog[];
  serviceTypes: ServiceType[];
}

export default function ServicesRealtimeGrid({
  serviceLogs,
  serviceTypes,
}: ServicesRealtimeGridProps) {
  const matches = useMediaQuery("(min-width:900px)");

  const supabase = createClient();

  const [services, setServices] =
    useState<(ServiceLog & { isNew?: boolean })[]>(serviceLogs);

  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  useEffect(() => {
    setServices(serviceLogs);
  }, [serviceLogs]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "VehicleServiceLogs" },
        (payload: { new: ServiceLog }) => {
          console.log("NEW RECORD", payload);
          setServices((services) => [...services, { ...payload.new }]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [serviceLogs]);

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
    const { error } = await supabase
      .from("VehicleServiceLogs")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    setServices(services.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = services.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setServices(services.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false } as ServiceLog & {
      isNew?: boolean;
    };

    setServices(
      services.map((row) => (row.id === newRow.id ? updatedRow : row))
    );

    let row = Object.fromEntries(
      Object.entries(newRow).filter(([k]) => k !== "isNew" && k !== "id")
    );

    const { error } = await supabase
      .from("VehicleServiceLogs")
      .update(row)
      .eq("id", newRow.id);

    if (error) {
      throw error;
    }

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
      field: "service_date",
      headerName: "Date",
      width: 150,
      type: "dateTime",
      valueFormatter: (value) => new Date(value),
    },
    {
      field: "service_type_id",
      headerName: "Type",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: serviceTypes,
      getOptionValue(value: any) {
        return value.id;
      },
      getOptionLabel(value: any) {
        return value.name;
      },
    },
    { field: "notes", headerName: "Notes", width: 300, editable: true },
    {
      field: "cost",
      headerName: "Cost",
      headerAlign: "right",
      align: "right",
      description: "The cost of this service",
      width: 150,
      type: "number",
      editable: true,
      valueFormatter: (value, row) => {
        return `${value},- ${row.currency}`;
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

  const [serviceLogId, setServiceLogId] = useState<{
    id: number | null;
    open: boolean;
  }>({
    id: null,
    open: false,
  });

  return (
    <Box>
      <ServiceDialog
        open={serviceLogId.open}
        id={serviceLogId.id}
        onClose={() => {
          setServiceLogId({ open: false, id: null });
        }}
      />
      {matches ? (
        <DataGrid
          rows={services}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          onProcessRowUpdateError={handleError}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: EditToolbar as GridSlots["toolbar"] }}
          slotProps={{
            toolbar: { setServices, setRowModesModel },
          }}
        />
      ) : (
        <Grid container spacing={1}>
          {services.map((row) => (
            <Grid item key={row.id} xs={12}>
              <Card>
                <CardActionArea
                  onClick={() => {
                    setServiceLogId(() => ({ open: true, id: row.id }));
                  }}
                >
                  <CardHeader
                    title={
                      serviceTypes.find(
                        (type) => type.id === row.service_type_id
                      )?.name || ""
                    }
                    subheader={Intl.DateTimeFormat("en-GB").format(
                      new Date(row.service_date || row.created_at)
                    )}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      test
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
