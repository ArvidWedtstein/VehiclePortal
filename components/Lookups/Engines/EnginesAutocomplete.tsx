"use client";

import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import getEngines, { Engine } from "./Engines";
import { NewEngineDialog } from "./NewEngineDialog";

const filter = createFilterOptions<Partial<Engine> & { inputValue?: string }>();

export default function EnginesAutocomplete() {
  const [engines, setEngines] = useState<
    Partial<Engine & { inputValue?: string }>[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEngines = async () => {
      try {
        const engines = await getEngines();

        setEngines(engines || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching EnginesLookup data:", error);
      }
    };

    fetchEngines();
  }, []);

  const [value, setValue] = useState<Partial<
    Engine & { inputValue?: string }
  > | null>(null);
  const [open, toggleOpen] = useState(false);

  const handleClose = () => {
    setDialogValue({
      name: "",
      code: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = useState<
    Partial<Engine & { inputValue?: string }>
  >({
    name: "",
    code: "",
    compression_ratio: undefined,
    horsepower: undefined,
    type: undefined,
    fuel_type: undefined,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      code: dialogValue.code,
    });
    handleClose();
  };

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
                code: "",
              });
            });
          } else if (newValue && newValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
              code: "",
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        getOptionLabel={(option) => {
          // for example value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.name) {
            return option.name;
          }
          return option.name || "";
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        id="engine"
        loading={isLoading}
        options={engines}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Engine"
            margin="dense"
            variant="standard"
            fullWidth
          />
        )}
      />
      <NewEngineDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        setDialogValue={setDialogValue}
        dialogValue={dialogValue}
      />
    </>
  );
}
