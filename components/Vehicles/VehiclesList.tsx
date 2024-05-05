"use client";

import { createClient } from "@/utils/supabase/client";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <List style={{ overflowY: "auto", minWidth: "16rem" }}>
      <VehicleDialog />

      {vehicles.map((vehicle, idx) => (
        <ListItem key={idx}>
          <Card
            style={{
              width: "100%",
              // borderColor:
              //   activeCar === car.id ? Colors2.blueGrey["500"] : "",
            }}
            variant="outlined"
          >
            <CardHeader
              title={vehicle.name}
              subheader={vehicle.make}
              action={
                <IconButton
                  aria-label="settings"
                  aria-haspopup="true"
                  onClick={handleClick}
                  aria-controls={open ? "basic-menu" : undefined}
                >
                  <MoreVert />
                </IconButton>
              }
            />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {vehicle.model}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
