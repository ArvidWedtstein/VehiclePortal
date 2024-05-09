"use client";

import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import getEngines, { Engine } from "./Engines";

export default function EnginesAutocomplete() {
  const [engines, setEngines] = useState<Engine[]>([]);
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

  return (
    <Autocomplete
      disablePortal
      id="engine"
      loading={isLoading}
      options={engines.map((engine) => ({ label: engine?.name || "" }))}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label="Engine"
          margin="dense"
          variant="standard"
        />
      )}
    />
  );
}
