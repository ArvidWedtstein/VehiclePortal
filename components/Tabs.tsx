"use client";
import { Box, Paper, Tab, TabOwnProps, Tabs as MuiTabs } from "@mui/material";
import { Children, isValidElement, ReactNode, useState } from "react";

interface TabsProps {
  children?: React.ReactNode[];
  orientation?: "horizontal" | "vertical";
}

export default function Tabs(props: TabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <MuiTabs
        orientation={props.orientation || "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
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
      </MuiTabs>

      {Children.map(props?.children, (child, index) => {
        if (!child || !isValidElement(child)) return;

        const { children } = child.props;

        return (
          <TabPanel value={value} index={index}>
            {children}
          </TabPanel>
        );
      })}
    </>
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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
