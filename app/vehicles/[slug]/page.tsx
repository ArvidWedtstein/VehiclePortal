import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Box } from "@mui/material";
import Tabs, { TabPanel } from "@/components/Tabs";
import {
  AttachMoneyOutlined,
  ConstructionSharp,
  DirectionsCar,
} from "@mui/icons-material";
import ServicesGrid from "@/components/Vehicles/ServicesGrid";

export default async function VehiclePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("Vehicles")
    .select()
    .match({ id: slug })
    .single();

  if (!data) {
    notFound();
  }

  return (
    <Box>
      <Tabs>
        <TabPanel label="General" icon={<DirectionsCar />} iconPosition="start">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </TabPanel>
        <TabPanel
          label="Service"
          icon={<ConstructionSharp />}
          iconPosition="start"
        >
          <ServicesGrid />
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
