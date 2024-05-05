import DeployButton from "@/components/DeployButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Tab,
  TabOwnProps,
  TabProps,
  Theme,
  Typography,
} from "@mui/material";
import VehicleTypesTabs, {
  TabPanel,
} from "@/components/Vehicles/VehicleTypesTabs";
import VehiclesList from "@/components/Vehicles/VehiclesList";

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
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <VehicleTypesTabs>
        <TabPanel label="Cars">
          <VehiclesList />

          <Paper sx={{ p: 4, height: "100%" }}>xs=4</Paper>
        </TabPanel>
        <TabPanel label="Motorcycles">
          <VehiclesList />
        </TabPanel>
      </VehicleTypesTabs>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
          <Paper sx={{ p: 4 }}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 4 }}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 4,
            }}
          >
            xs=4
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
