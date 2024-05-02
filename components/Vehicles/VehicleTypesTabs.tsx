"use client";
import {
  Box,
  ExtendButtonBase,
  Tab,
  TabProps,
  Tabs,
  TabsOwnProps,
  TabTypeMap,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface VehicleTypesTabsProps {
  children?: React.ReactNode[];
}
export default function VehicleTypesTabs({ children }: VehicleTypesTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {children}
      </Tabs>
      {/*TODO: fix*/}
      {children?.map((child, index) => (
        <TabPanel value={value} index={index} key={index}>
          Item One
        </TabPanel>
      ))}
    </Box>
  );
}

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
