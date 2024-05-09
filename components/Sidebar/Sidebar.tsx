"use server";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ProfileMenu from "./../Navbar/ProfileMenu";
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
import { Inbox, Mail, Person, Restore } from "@mui/icons-material";

const pages = ["Vehicles"];

export default async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <>
      <Paper
        variant="elevation"
        elevation={1}
        sx={{ height: "100%", display: { xs: "none", md: "block" } }}
      >
        <List sx={{ display: { xs: "none", md: "block" } }}>
          <ListItem>
            {user ? (
              <ProfileMenu>
                <MenuItem component={"a"} href={`/profile/${user.id}`}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={signOut}>
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
          {pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", md: "none" },
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {pages.map((page, index) => (
            <BottomNavigationAction
              label={page}
              icon={<Restore />}
              key={`page-${index}`}
            />
          ))}
          <BottomNavigationAction label="Favorites" icon={<Inbox />} />
          {user ? (
            <BottomNavigationAction
              label="Profile"
              icon={<Person />}
              href={`/profile/${user.id}`}
            />
          ) : (
            <BottomNavigationAction
              label="Login"
              icon={<Person />}
              href={`/login`}
            />
          )}
        </BottomNavigation>
      </Paper>
    </>
  );
}