import { Engine } from "@/components/Lookups/Engines/Engines";
import { Transmission } from "@/components/Lookups/Transmissions/Transmissions";
import { createClient } from "@/utils/supabase/server";
import {
  BikeScooterOutlined,
  CarRentalOutlined,
  GasMeterOutlined,
  LocalGasStationOutlined,
} from "@mui/icons-material";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";
import { notFound, redirect } from "next/navigation";
import { Vehicle } from "@/components/Lookups/Vehicles/Vehicles";
import GearShifter from "@/components/Icons/GearShifter";
import Motorcycle from "@/components/Icons/Motorcycle";
import Car from "@/components/Icons/Car";
import { shareVehicle } from "@/components/Lookups/VehiclesShared/VehiclesShared";
import ShareButton from "@/components/UI/ShareButton";

export default async function VehiclePage({
  params: { registration_number },
}: {
  params: { registration_number: string };
}) {
  const supabase = createClient();
  const { data: vehicle, error } = await supabase
    .from("Vehicles")
    .select(
      `
      id,
      created_at,
      createdby_id,
      name,
      model,
      make,
      manufacturer,
      drivetrain,
      width,
      length,
      height,
      body_type,
      register_number,
      vehicle_identification_number,
      engine_id,
      transmission_id,
      fuel_capacity,
      type,
      VehicleEngines (
        name,
        kilowatt,
        displacement,
        fuel_type,
        horsepower
      ),
      VehicleTransmissions (
        name,
        gears,
        type
      )
      `
    )
    .match({ register_number: registration_number.toUpperCase() })
    .returns<
      (Vehicle & {
        VehicleEngines?: Engine;
        VehicleTransmissions?: Transmission;
      })[]
    >()
    .single();

  if (!vehicle || error) {
    console.error(error);
    notFound();
  }

  return (
    <Card variant="outlined" sx={{ mt: 3 }}>
      <CardContent>
        <Stack direction="row" spacing={2} my={2} alignItems={"center"}>
          <ShareButton vehicle_id={vehicle.id} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Chip
            variant="outlined"
            label={vehicle.drivetrain}
            size="small"
            icon={<CarRentalOutlined />}
          />
          {vehicle?.VehicleTransmissions?.type && (
            <Chip
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              label={vehicle?.VehicleTransmissions?.type}
              size="small"
              icon={<CarRentalOutlined />}
            />
          )}
          {vehicle?.VehicleTransmissions?.gears && (
            <Chip
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              label={`${vehicle?.VehicleTransmissions?.gears} gears`}
              size="small"
              icon={
                <GearShifter gears={vehicle?.VehicleTransmissions?.gears} />
              }
            />
          )}
          {vehicle?.VehicleEngines?.displacement && (
            <Chip
              variant="outlined"
              label={`${(
                Math.round(
                  (Math.round(vehicle?.VehicleEngines?.displacement || 0) /
                    1000) *
                    10
                ) / 10
              ).toFixed(1)} L`}
              size="small"
              icon={<GasMeterOutlined />}
            />
          )}
          {vehicle?.eu_control_date && (
            <Chip
              variant="outlined"
              label={vehicle?.eu_control_date || ""}
              size="small"
            />
          )}
          {vehicle?.fuel_capacity && (
            <Chip
              variant="outlined"
              label={`${vehicle?.fuel_capacity} L` || ""}
              size="small"
              icon={<LocalGasStationOutlined />}
            />
          )}
          {vehicle?.type && (
            <Chip
              variant="outlined"
              label={vehicle?.type || ""}
              size="small"
              icon={
                vehicle.type === "M1" ? (
                  <Car />
                ) : vehicle.type === "MCT" ? (
                  <Motorcycle />
                ) : (
                  <BikeScooterOutlined />
                )
              }
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
