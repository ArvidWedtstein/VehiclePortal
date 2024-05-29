"use client";

import {
  getExpenses,
  Expense as ExpenseType,
} from "@/components/Lookups/Expenses/Expenses";
import getServiceLogs, {
  ServiceLog,
} from "@/components/Lookups/ServiceLogs/ServiceLogs";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type ExpenseProps = {
  id?: number;
};
export default function Expense({ id }: ExpenseProps) {
  const [expense, setExpense] = useState<ExpenseType | null>(null);

  useEffect(() => {
    const getExpense = async () => {
      if (!id) return;
      const expense = await getExpenses({ id: id });

      setExpense(id ? expense[0] : null);
    };

    getExpense();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {expense && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="expense_type"
              label="Type"
              type="text"
              fullWidth
              defaultValue={expense?.expense_type}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateTimePicker
              label="Date"
              name="expense_date"
              sx={{ width: "100%" }}
              defaultValue={
                expense?.expense_date ? dayjs(expense?.expense_date) : null
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              name="cost"
              label="Cost"
              type="number"
              fullWidth
              defaultValue={expense?.cost}
              InputProps={{
                sx: { pr: 0 },
                endAdornment: (
                  <Select defaultValue={expense?.currency}>
                    <MenuItem value={"NOK"}>NOK</MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"GBP"}>GBP</MenuItem>
                  </Select>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              name="odometer_reading"
              label="Odometer Reading"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: !!expense?.odometer_reading,
              }}
              defaultValue={expense?.odometer_reading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              label="Notes"
              margin="dense"
              type="text"
              name="notes"
              fullWidth
              rows={3}
              defaultValue={expense?.notes}
            />
          </Grid>
        </Grid>
      )}
    </LocalizationProvider>
  );
}
