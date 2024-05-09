import Tabs, { TabPanel } from "@/components/Tabs";
import {
  AttachMoney,
  AttachMoneyOutlined,
  Construction,
  ConstructionSharp,
  DirectionsCar,
} from "@mui/icons-material";
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
  Tab,
  Toolbar,
} from "@mui/material";

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
