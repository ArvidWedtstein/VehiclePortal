"use client";

import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import getServiceTypes, { ServiceType } from "./ServiceTypes";

export default function ServiceTypesAutocomplete({
  defaultValue,
}: {
  defaultValue?: number;
}) {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const serviceTypes = await getServiceTypes();

        setServiceTypes(serviceTypes || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching ServiceTypesLookup data:", error);
      }
    };

    fetchServiceTypes();
  }, []);

  let defaultVal =
    serviceTypes.find((option) => option.id === defaultValue) || null;

  return (
    !!defaultValue &&
    !!defaultVal && (
      <Autocomplete
        disablePortal
        id="servicetype"
        loading={isLoading || (!defaultVal && !!defaultValue)}
        options={serviceTypes}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        fullWidth
        defaultValue={defaultVal}
        renderInput={(params) => (
          <TextField {...params} label="Service Type" margin="dense" />
        )}
      />
    )
  );
}
