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
  Tabs,
  Toolbar,
} from "@mui/material";

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab label="General" icon={<DirectionsCar />} iconPosition="start" />
          <Tab
            label="Service"
            icon={<ConstructionSharp />}
            iconPosition="start"
          />
          <Tab
            label="Expenses"
            icon={<AttachMoneyOutlined />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      {children}
    </Box>
  );
}
