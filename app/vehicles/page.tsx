import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Box, Grid } from "@mui/material";
import VehiclesList from "@/components/Vehicles/VehiclesList";
import NewVehicleButton from "@/components/Vehicles/NewVehicleButton";

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
          <NewVehicleButton />
        </Grid>
        <VehiclesList />
      </Grid>
    </Box>
  );
}
