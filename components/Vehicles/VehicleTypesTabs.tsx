"use client";
import { Box, Paper, Tab, TabOwnProps, Tabs } from "@mui/material";
import { Children, isValidElement, ReactNode, useState } from "react";

interface VehicleTypesTabsProps {
  children?: React.ReactNode[];
}

export default function VehicleTypesTabs(props: VehicleTypesTabsProps) {
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
      <Paper variant="elevation" elevation={1}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vehicle tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {
            Children.map(props?.children, (child, index) => {
              if (!child || !isValidElement(child)) return;
              const {
                children,
                value,
                label = "Vehicle",
                ...other
              } = child.props;

              return <Tab label={label} key={index} value={index} {...other} />;
            }) as ReactNode
          }
        </Tabs>
      </Paper>

      {Children.map(props?.children, (child, index) => {
        if (!child || !isValidElement(child)) return;

        const { children } = child.props;

        return (
          <TabPanel value={value} index={index}>
            {children}
          </TabPanel>
        );
      })}
    </Box>
  );
}

interface TabPanelProps extends Omit<TabOwnProps, "children"> {
  children?: React.ReactNode;
  index?: number;
  value?: number;
}
export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            maxHeight: "100%",
            p: 0,
            overflowY: "auto",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
