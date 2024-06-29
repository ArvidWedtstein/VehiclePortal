"use client";

import { Button } from "@mui/material";
import { shareVehicle } from "../Lookups/VehiclesShared/VehiclesShared";

export default function ShareButton({
  user_id,
  vehicle_id,
}: {
  user_id: string;
  vehicle_id: number;
}) {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={() =>
        shareVehicle({
          user_id: user_id,
          vehicle_id: vehicle_id,
        })
      }
    >
      Share
    </Button>
  );
}
