import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
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
import { Add, Inbox, Mail } from "@mui/icons-material";
import VehicleDialog from "@/components/Vehicles/VehicleDialog";

export default async function VehiclesPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // const { data, error } = await supabase.from("Profiles").select("*");

  // const { data, error } = await supabase
  //   .from("Vehicles")
  //   .insert([{ name: "Honda", model: 1994, make: "Shadow" }])
  //   .select();

  // console.log(error, data);

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
