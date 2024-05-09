import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Tab,
  TabOwnProps,
  TabProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import VehicleTypesTabs, {
  TabPanel,
} from "@/components/Vehicles/VehicleTypesTabs";
import VehiclesList from "@/components/Vehicles/VehiclesList";
import VehicleDialog from "@/components/Vehicles/VehicleDialog";

export default async function VehiclesPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <Box sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <VehicleDialog />
        </Grid>
        <VehiclesList />
      </Grid>

      {/* <VehicleTypesTabs>
        <TabPanel label="Cars">
          <VehiclesList />
          <Paper sx={{ p: 4, height: "100%" }}>xs=4</Paper>
        </TabPanel>
        <TabPanel label="Motorcycles">
          <VehiclesList />
        </TabPanel>
      </VehicleTypesTabs> */}
    </Box>
  );
}
