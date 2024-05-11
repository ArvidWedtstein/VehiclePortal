"use client";

import { Box, styled } from "@mui/material";
import React, { forwardRef, HTMLAttributes } from "react";
import { useThemeProps } from "@mui/material/styles";

export interface StatProps {
  header?: string;
  value: number | string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "outlined" | "standard";
}

interface StatOwnerState extends StatProps {
  // …key value pairs for the internal state that you want to style the slot
  // but don't want to expose to the users
}

const StatRoot = styled("div", {
  name: "MuiStat",
  slot: "root",
})<{ ownerState: StatOwnerState }>(({ theme, ownerState }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  letterSpacing: "-0.025em",
  fontWeight: 600,
  ...(ownerState.variant === "outlined" && {
    border: `2px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

const StatHeader = styled("div", {
  name: "MuiStat",
  slot: "header",
})(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
}));

const StatValue = styled("div", {
  name: "MuiStat",
  slot: "value",
})(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: theme.typography.fontWeightMedium,
}));

const StatIcon = styled("div", {
  name: "MuiStat",
  slot: "icon",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
}));

const StatDescription = styled("div", {
  name: "MuiStat",
  slot: "description",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Stat = forwardRef<HTMLDivElement, StatProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: "MuiStat" });
  const { header, value, description, icon, variant, ...other } = props;

  const ownerState = { ...props, variant };

  return (
    <StatRoot ref={ref} ownerState={ownerState} {...other}>
      {icon && <StatIcon>{icon}</StatIcon>}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <StatHeader>{header}</StatHeader>
        <StatValue>{value}</StatValue>
        {description && <StatDescription>{description}</StatDescription>}
      </Box>
    </StatRoot>
  );
});

export default Stat;
