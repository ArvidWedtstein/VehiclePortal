import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Engine } from "./Engines";
import React from "react";

type NewEngineDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setDialogValue: (params: Record<string, any>) => void;
  dialogValue: Partial<Engine>;
};
export function NewEngineDialog({
  open,
  dialogValue,
  handleClose,
  handleSubmit,
  setDialogValue,
}: NewEngineDialogProps) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add a new Engine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Did you miss any engine in our list? Please, add it!
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={dialogValue.name}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    name: event.target.value,
                  })
                }
                fullWidth
                label="Name"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="manufacturer"
                value={dialogValue.manufacturer}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    manufacturer: event.target.value,
                  })
                }
                label="Manufacturer"
                fullWidth
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="fuel_type"
                select
                value={dialogValue.fuel_type}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    fuel_type: event.target.value,
                  })
                }
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
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="horsepower"
                fullWidth
                value={dialogValue.horsepower}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    horsepower: event.target.value,
                  })
                }
                label="Horsepower"
                type="number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="kilowatt"
                value={dialogValue.kilowatt}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    kilowatt: event.target.value,
                  })
                }
                label="Kilowatt"
                type="number"
                variant="standard"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">kW</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="displacement"
                name="displacement"
                label="Displacement"
                type="text"
                fullWidth
                value={dialogValue.displacement}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    displacement: event.target.value,
                  })
                }
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">ccm</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="standard" margin="dense">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="fuel-type"
                  label="Type"
                  name="type"
                  value={dialogValue.type}
                  onChange={(event) =>
                    setDialogValue({
                      ...dialogValue,
                      type: event.target.value,
                    })
                  }
                >
                  <MenuItem value={"inline-4"}>Inline 4</MenuItem>
                  <MenuItem value={"V6"}>V6</MenuItem>
                  <MenuItem value={"V8"}>V8</MenuItem>
                  <MenuItem value={"V12"}>V12</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="valves"
                name="valves"
                label="Valves"
                type="number"
                fullWidth
                value={dialogValue.valves}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    valves: event.target.value,
                  })
                }
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                id="compression_ratio"
                name="compression_ratio"
                label="Compression Ratio"
                type="number"
                fullWidth
                value={dialogValue.valves}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    compression_ratio: event.target.value,
                  })
                }
                variant="standard"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
