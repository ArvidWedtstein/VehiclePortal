"use client";

import getServiceLogs, {
  ServiceLog,
} from "@/components/Lookups/ServiceLogs/ServiceLogs";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type ServiceProps = {
  serviceLog?: ServiceLog;
  id?: number;
};
export default function Service({ id }: ServiceProps) {
  const [serviceLog, setServiceLog] = useState<ServiceLog | null>(null);

  useEffect(() => {
    const getServiceLog = async () => {
      if (!id) return;

      const serviceLog = await getServiceLogs({ id: id });

      setServiceLog(id ? serviceLog[0] : null);
    };

    getServiceLog();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {serviceLog && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="type"
              label="Type"
              type="text"
              fullWidth
              defaultValue={serviceLog?.type}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="dense"
              name="service_provider"
              label="Provider"
              type="text"
              fullWidth
              defaultValue={serviceLog?.service_provider}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateTimePicker
              label="Date"
              name="service_date"
              sx={{ width: "100%" }}
              defaultValue={
                serviceLog?.service_date
                  ? dayjs(serviceLog?.service_date)
                  : null
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
              defaultValue={serviceLog?.cost}
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
                shrink: !!serviceLog?.odometer_reading,
              }}
              defaultValue={serviceLog?.odometer_reading}
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
              defaultValue={serviceLog?.notes}
            />
          </Grid>
        </Grid>
      )}
    </LocalizationProvider>
  );
}
