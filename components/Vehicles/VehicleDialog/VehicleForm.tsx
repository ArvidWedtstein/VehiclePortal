"use client";

import { createVehicle, getVehicleData } from "@/app/vehicles/actions";
import EnginesAutocomplete from "@/components/Lookups/Engines/EnginesAutocomplete";
import getServiceLogs, {
  ServiceLog,
} from "@/components/Lookups/ServiceLogs/ServiceLogs";
import ServiceTypesAutocomplete from "@/components/Lookups/ServiceTypes/ServiceTypesAutocomplete";
import TransmissionsAutocomplete from "@/components/Lookups/Transmissions/TransmissionsAutocomplete";
import getVehicles, { Vehicle } from "@/components/Lookups/Vehicles/Vehicles";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { FormData } from "./VehicleDialog";

type VehicleProps = {
  id?: number;
  activeStep: number;
  steps: string[];
  isStepOptional: (step: number) => boolean;
  isStepSkipped: (step: number) => boolean;
  formData: FormData;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function VehicleForm({
  id,
  steps,
  activeStep,
  isStepOptional,
  isStepSkipped,
  formData,
  handleChange,
}: VehicleProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="register_number"
              name="register_number"
              label="Register Number"
              type="text"
              value={formData.register_number}
              onChange={handleChange}
              fullWidth
              required
              variant="standard"
              placeholder="AB 12345"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="vin"
              name="vin"
              label="Vehicle Identification Number (VIN)"
              type="text"
              value={formData.vin}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="make"
              name="make"
              label="Make"
              type="text"
              value={formData.make}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="model"
              name="model"
              label="Model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      )}

      {activeStep === 1 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EnginesAutocomplete />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="displacement"
              name="displacement"
              label="Displacement"
              type="text"
              fullWidth
              value={formData.VehicleEngines?.displacement}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ccm</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="horsepower"
              name="horsepower"
              label="Horsepower"
              type="number"
              fullWidth
              value={formData.VehicleEngines?.horsepower}
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="kilowatt"
              name="kilowatt"
              label="Kilowatt"
              type="number"
              fullWidth
              value={formData.VehicleEngines?.kilowatt}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kW</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="fuel_type"
              name="fuel_type"
              select
              value={formData.VehicleEngines?.fuel_type}
              onChange={handleChange}
              label="Fuel"
              fullWidth
              type="text"
              variant="standard"
            >
              <MenuItem value={"gasoline"}>Gasoline</MenuItem>
              <MenuItem value={"diesel"}>Diesel</MenuItem>
              <MenuItem value={"jet_fuel"}>Jet Fuel</MenuItem>
              <MenuItem value={"hybrid"}>Hybrid</MenuItem>
              <MenuItem value={"electricity"}>Jet Fuel</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="engine_type"
              name="engine_type"
              select
              value={formData.engine_type}
              onChange={handleChange}
              label="Type"
              fullWidth
              type="text"
              variant="standard"
            >
              <MenuItem value={"1"}>1 Cylinder</MenuItem>
              <MenuItem value={"2"}>2 Cylinder</MenuItem>
              <MenuItem value={"inline-4"}>Inline 4</MenuItem>
              <MenuItem value={"V6"}>V6</MenuItem>
              <MenuItem value={"V8"}>V8</MenuItem>
              <MenuItem value={"V12"}>V12</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="valves"
              name="valves"
              label="Valves"
              type="number"
              value={formData.valves}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      )}

      {activeStep === 2 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TransmissionsAutocomplete />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="gear"
              name="gear"
              label="Gears"
              type="number"
              fullWidth
              value={formData.gears}
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              margin="dense"
              id="transmission_manufacturer"
              name="transmission_manufacturer"
              label="Manufacturer"
              type="text"
              fullWidth
              value={formData.transmission_manufacturer}
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="standard" margin="dense">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="fuel-type"
                label="Type"
                name="transmission-type"
                value={formData.transmission_type}
                onSelect={handleChange}
              >
                <MenuItem value={"M"}>Manual</MenuItem>
                <MenuItem value={"A"}>Automatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      )}
    </LocalizationProvider>
  );
}
