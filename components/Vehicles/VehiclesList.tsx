import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import getVehicles from "../Lookups/Vehicles/Vehicles";

interface VehiclesListProps {
  children?: React.ReactNode[];
}

export default async function VehiclesList(props: VehiclesListProps) {
  const vehicles = await getVehicles();
  return vehicles.map((vehicle, idx) => (
    <Grid item xs={12} md={3} key={`vehicle-${idx}`}>
      <Card>
        <CardActionArea href={`/vehicles/${vehicle.id}`}>
          <CardMedia
            component={"img"}
            height="140"
            src="/images/DSC01917.jpg"
            alt="haudi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {vehicle.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {vehicle.model}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
}
