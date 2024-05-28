"use server";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ProfileMenu from "./ProfileMenu";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  DirectionsCar,
  Inbox,
  Mail,
  Person,
  Restore,
} from "@mui/icons-material";
import MobileMenu from "./MobileMenu";
import { grey } from "@mui/material/colors";

const pages = [
  {
    name: "Vehicles",
    href: "/vehicles",
    icon: DirectionsCar,
  },
];

export default async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Paper
        variant="elevation"
        elevation={1}
        square
        sx={{
          height: "100%",
          display: { xs: "none", md: "block" },
          bgcolor: grey[100],
        }}
      >
        <List sx={{ display: { xs: "none", md: "block" } }}>
          <ListItem>
            {user ? (
              <ProfileMenu user={user}>
                <MenuItem component={"a"} href={`/profile/${user.id}`}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem component={"a"} href="/auth/signout">
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </ProfileMenu>
            ) : (
              <Button variant="text" href="/login" color="inherit">
                Login
              </Button>
            )}
          </ListItem>
        </List>
        <Divider />

        <List sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <ListItem key={`vehicle-${index}`} disablePadding>
              <ListItemButton href={page.href}>
                <ListItemIcon>
                  <page.icon />
                </ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>

      <MobileMenu pages={pages} user={user} />
    </>
  );
}
