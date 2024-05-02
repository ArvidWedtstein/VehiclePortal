import DeployButton from "@/components/DeployButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@mui/material";
import VehicleTypesTabs from "@/components/Vehicles/VehicleTypesTabs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <VehicleTypesTabs>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </VehicleTypesTabs>

      <Grid container spacing={2}>
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
              // backgroundColor: (theme) =>
              //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            xs=4
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
