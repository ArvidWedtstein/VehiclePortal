"use client";

import { createClient } from "@/utils/supabase/client";
import { Add, MoreVert } from "@mui/icons-material";
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
import { useEffect, useState } from "react";
import VehicleDialog from "./VehicleDialog";

interface VehiclesListProps {
  children?: React.ReactNode[];
}

export default function VehiclesList(props: VehiclesListProps) {
  const supabase = createClient();

  type Vehicle = {
    id: number;
    created_at: string;
    createdby_id: string;
    name: string;
    model?: number;
    make?: string;
    manufacturer?: string;
    drivetrain?: string;
    width?: number | null;
    length?: number | null;
    height?: number | null;
    body_type?: string;
    register_number?: string;
    vehicle_identification_number?: string | null;
  };

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from("Vehicles").select("*");
      setVehicles(data || []);

      if (error) {
        console.error(error);
      }
    };

    fetchVehicles();
  }, []);
  return (
    <>
      {vehicles.map((vehicle, idx) => (
        <Grid item xs={12} md={3} key={`vehicle-${idx}`}>
          <Card>
            <CardActionArea href={`/vehicles/${vehicle.id}`}>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
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
      ))}
    </>
  );
}
