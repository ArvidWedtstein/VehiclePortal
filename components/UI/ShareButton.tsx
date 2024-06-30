"use client";

import { Button, Snackbar } from "@mui/material";
import { shareVehicle } from "../Lookups/VehiclesShared/VehiclesShared";
import UserDialog from "./UserDialog";
import { useState } from "react";

export default function ShareButton({ vehicle_id }: { vehicle_id: number }) {
  const [open, setOpen] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState(false);

  const handleClose = (value: string | null) => {
    setOpen(false);

    if (!value) return;

    shareVehicle({
      user_id: value,
      vehicle_id,
    });

    setSnackbarStatus(true);
  };
  return (
    <>
      <UserDialog open={open} onClose={handleClose} />
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Share with...
      </Button>

      <Snackbar
        open={snackbarStatus}
        autoHideDuration={3000}
        message="Shared Vehicle Data with user"
      />
    </>
  );
}
