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
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tabs, { TabPanel } from "@/components/Tabs";
import {
  Add,
  AttachMoneyOutlined,
  CarRentalOutlined,
  ConstructionSharp,
  DensityMediumRounded,
  DirectionsCar,
  LinearScale,
  LinearScaleRounded,
} from "@mui/icons-material";
import ServicesRealtime from "@/components/Vehicles/Services/ServicesGrid/ServicesRealtime";
import { Vehicle } from "@/components/Lookups/Vehicles/Vehicles";
import Stat from "@/components/Stat";
import { Engine } from "@/components/Lookups/Engines/Engines";
import { Transmission } from "@/components/Lookups/Transmissions/Transmissions";
import GearShifter from "@/components/Icons/GearShifter";

export default async function VehiclePage({
  params: { slug },
}: {
  params: { slug: string };
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
    .match({ id: slug })
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
      <Grid sx={{ py: 2 }}>
        <Stat variant="outlined" value={vehicle.name}></Stat>
      </Grid>
      <Tabs>
        <TabPanel label="General" icon={<DirectionsCar />} iconPosition="start">
          <Card variant="outlined" sx={{ mt: 3 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
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
                  label={vehicle?.VehicleTransmissions?.gears}
                  size="small"
                  icon={<GearShifter gears={6} />}
                />
                <Chip
                  variant="outlined"
                  label={vehicle?.VehicleEngines?.displacement}
                  size="small"
                  icon={<p>ccm</p>}
                />
              </Stack>
            </CardContent>
          </Card>
          <pre>{JSON.stringify(vehicle, null, 2)}</pre>
          <Stat
            header={"tralala"}
            value={124}
            icon={<Add />}
            description={"tralal"}
          />
        </TabPanel>
        <TabPanel
          label="Service"
          icon={<ConstructionSharp />}
          iconPosition="start"
        >
          <ServicesRealtime vehicle_id={vehicle.id} />
        </TabPanel>
        <TabPanel
          label="Expenses"
          icon={<AttachMoneyOutlined />}
          iconPosition="start"
        >
          <p>expenses</p>
        </TabPanel>
      </Tabs>
    </Box>
  );
}
