import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Box, Grid, Paper } from "@mui/material";
import Tabs, { TabPanel } from "@/components/Tabs";
import {
  AttachMoneyOutlined,
  ConstructionSharp,
  DirectionsCar,
} from "@mui/icons-material";
import ServicesRealtime from "@/components/Vehicles/ServicesRealtime";
import { Vehicle } from "@/components/Lookups/Vehicles/Vehicles";
import Stat from "@/components/Stat";

export default async function VehiclePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: vehicle } = await supabase
    .from("Vehicles")
    .select()
    .match({ id: slug })
    .returns<Vehicle[]>()
    .single();

  if (!vehicle) {
    notFound();
  }

  return (
    <Box>
      <Grid sx={{ py: 2 }}>
        <Stat variant="outlined" value={vehicle.name} unit=""></Stat>
      </Grid>
      <Tabs>
        <TabPanel label="General" icon={<DirectionsCar />} iconPosition="start">
          <pre>{JSON.stringify(vehicle, null, 2)}</pre>
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
