"use client";

import { createClient } from "@/utils/supabase/client";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, Fragment, useState } from "react";
import EnginesAutocomplete from "../Lookups/EnginesAutocomplete";

type VehicleDialogProps = {
  vehicle_id?: number;
};
export default function VehicleDialog(props: VehicleDialogProps) {
  const [open, setOpen] = useState(false);

  const supabase = createClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  const steps = ["General Data", "Engine", "Transmission"];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Fragment>
      <ListItem>
        <Card
          style={{
            width: "100%",
          }}
          variant="elevation"
        >
          <CardActionArea onClick={handleClickOpen}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Add />
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>
          {props.vehicle_id ? "Edit Vehicle" : "New Vehicle"}
        </DialogTitle>
        <DialogContent>
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

          {activeStep === 0 ? (
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
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="dense"
                  id="registernumber"
                  name="registernumber"
                  label="Register Number"
                  type="text"
                  fullWidth
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
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
          ) : activeStep === 1 ? (
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
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="dense"
                  id="kilowatt"
                  name="kilowatt"
                  label="Kilowatt"
                  type="text"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kW</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth variant="standard" margin="dense">
                  <InputLabel id="fuel-type-label">Fuel</InputLabel>
                  <Select labelId="fuel-type-label" id="fuel-type" label="Fuel">
                    <MenuItem value={"gasoline"}>Gasoline</MenuItem>
                    <MenuItem value={"diesel"}>Diesel</MenuItem>
                    <MenuItem value={"Jet Fuel"}>Jet Fuel</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth variant="standard" margin="dense">
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select labelId="type-label" id="fuel-type" label="Fuel">
                    <MenuItem value={"inline-4"}>Inline 4</MenuItem>
                    <MenuItem value={"V6"}>V6</MenuItem>
                    <MenuItem value={"V8"}>V8</MenuItem>
                    <MenuItem value={"V12"}>V12</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="dense"
                  id="valves"
                  name="valves"
                  label="Valves"
                  type="number"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
          ) : (
            <Fragment></Fragment>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "" }}>
          {activeStep === steps.length ? (
            <Fragment>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Fragment>
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

type MaskedInputProps = {
  mask: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  definitions: Record<string, RegExp>;
};
const MaskedInput = ({
  mask,
  placeholder,
  onChange,
  definitions,
}: MaskedInputProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let maskedValue = "";

    // Apply mask to the input value
    let j = 0;
    for (let i = 0; i < mask.length; i++) {
      const maskChar = mask[i];
      if (definitions[maskChar]) {
        if (
          j < inputValue.length &&
          definitions[maskChar].test(inputValue[j])
        ) {
          maskedValue += inputValue[j];
          j++;
        }
      } else {
        maskedValue += maskChar;
      }
    }

    // Update the input value in state and trigger onChange
    setValue(maskedValue);
    onChange?.(maskedValue);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};
