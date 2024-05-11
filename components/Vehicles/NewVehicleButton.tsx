"use client";

import { Add } from "@mui/icons-material";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { useState } from "react";
import VehicleDialog from "./VehicleDialog/VehicleDialog";

export default function NewVehicleButton() {
  const [vehicleModal, setVehicleModal] = useState({ open: false, id: null });
  return (
    <>
      <VehicleDialog
        open={vehicleModal.open}
        id={vehicleModal.id}
        onClose={() => setVehicleModal({ open: false, id: null })}
      />
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
        variant="outlined"
      >
        <CardActionArea
          onClick={() => setVehicleModal({ open: true, id: null })}
          sx={{ height: "100%" }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Add />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
