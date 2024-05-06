import { createClient } from "@/utils/supabase/client";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function TransmissionsAutocomplete() {
  const supabase = createClient();

  type Transmission = {
    id: number;
    created: string;
    createdby_id?: string | null;
    name?: string;
    gears?: number;
    manufacturer?: string;
    type?: string | null;
  };

  const [transmissions, setTransmissions] = useState<Transmission[]>([]);

  useEffect(() => {
    const fetchEngines = async () => {
      const { data: transmissions, error } = await supabase
        .from("VehicleTransmissions")
        .select("*");

      if (error) {
        console.error(error);
      }

      setTransmissions(transmissions || []);
    };

    fetchEngines();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="engine"
      options={transmissions.map((transmission) => ({
        label: transmission?.name || "",
      }))}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label="Transmission"
          margin="dense"
          variant="standard"
        />
      )}
    />
  );
}
