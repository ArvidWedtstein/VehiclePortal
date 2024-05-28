import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import getTransmissions, { Transmission } from "./Transmissions";

export default function TransmissionsAutocomplete() {
  const [transmissions, setTransmissions] = useState<Transmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransmissions = async () => {
      try {
        const transmissions = await getTransmissions();

        setTransmissions(transmissions || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching TransmissionsLookup data:", error);
      }
    };

    fetchTransmissions();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="transmission"
      options={transmissions.map((transmission) => ({
        label: transmission?.name || "",
      }))}
      fullWidth
      loading={isLoading}
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
