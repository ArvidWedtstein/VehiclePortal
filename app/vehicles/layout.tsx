import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
} from "@mui/material";

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ px: 2 }}>{children}</Box>;
}
