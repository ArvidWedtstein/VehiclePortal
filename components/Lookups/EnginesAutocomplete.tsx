import { createClient } from "@/utils/supabase/client";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function EnginesAutocomplete() {
  const supabase = createClient();

  type Engine = {
    id: number;
    created: string;
    createdby_id?: string | null;
    name?: string;
    displacement?: number;
    manufacturer?: string;
    fuel_type?: string;
    code?: string | null;
    type?: string | null;
    horsepower?: number;
    kilowatt?: number;
    valves?: number;
    compression_ratio?: number;
  };

  const [engines, setEngines] = useState<Engine[]>([]);

  useEffect(() => {
    const fetchEngines = async () => {
      const { data: engines, error } = await supabase
        .from("VehicleEngines")
        .select("*");

      if (error) {
        console.error(error);
      }

      setEngines(engines || []);
    };

    fetchEngines();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="engine"
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
