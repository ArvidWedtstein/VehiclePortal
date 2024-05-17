import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tabs, { TabPanel } from "@/components/Tabs";
import {
  Add,
  AttachMoneyOutlined,
  CarRentalOutlined,
  ConstructionOutlined,
  DirectionsCarFilledOutlined,
  GasMeterOutlined,
} from "@mui/icons-material";
import { lazy } from "react";
import { Vehicle } from "@/components/Lookups/Vehicles/Vehicles";
import Stat from "@/components/Stat";
import { Engine } from "@/components/Lookups/Engines/Engines";
import { Transmission } from "@/components/Lookups/Transmissions/Transmissions";
import GearShifter from "@/components/Icons/GearShifter";
const ServicesRealtime = lazy(
  () => import("@/components/Vehicles/Services/ServicesGrid/ServicesRealtime")
);
const ExpensesRealtime = lazy(
  () => import("@/components/Vehicles/Expenses/ExpensesGrid/ExpensesRealtime")
);

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function VehiclePage({
  params: { id },
}: {
  params: { id: string };
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
    .match({ id: id })
    .returns<
      (Vehicle & {
        VehicleEngines?: Engine;
        VehicleTransmissions?: Transmission;
      })[]
    >()
    .single();

  if (!vehicle || error) {
    notFound();
  }
  return (
    <Box>
      <Tabs>
        <TabPanel
          label="General"
          icon={<DirectionsCarFilledOutlined />}
          iconPosition="start"
        >
          <Card variant="outlined" sx={{ mt: 3 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems={"center"}>
                <Chip
                  variant="outlined"
                  label={vehicle.drivetrain}
                  size="small"
                  icon={<CarRentalOutlined />}
                />
                <Chip
                  variant="outlined"
                  sx={{ textTransform: "capitalize" }}
                  label={vehicle?.VehicleTransmissions?.type}
                  size="small"
                  icon={<CarRentalOutlined />}
                />
                <Chip
                  variant="outlined"
                  sx={{ textTransform: "capitalize" }}
                  label={`${vehicle?.VehicleTransmissions?.gears} gears`}
                  size="small"
                  icon={
                    <GearShifter gears={vehicle?.VehicleTransmissions?.gears} />
                  }
                />
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
                {vehicle?.eu_control_date && (
                  <Chip
                    variant="outlined"
                    label={vehicle?.eu_control_date || ""}
                    size="small"
                  />
                )}
              </Stack>
            </CardContent>
          </Card>
          <Stat
            header={"tralala"}
            value={124}
            icon={<Add />}
            description={"tralal"}
          />
          <pre>{JSON.stringify(vehicle, null, 2)}</pre>
        </TabPanel>
        <TabPanel
          label="Service"
          icon={<ConstructionOutlined />}
          iconPosition="start"
        >
          <ServicesRealtime vehicle_id={vehicle.id} />
        </TabPanel>
        <TabPanel
          label="Expenses"
          icon={<AttachMoneyOutlined />}
          iconPosition="start"
        >
          <ExpensesRealtime vehicle_id={vehicle.id} />
        </TabPanel>
      </Tabs>
    </Box>
  );
}
