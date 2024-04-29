"use client";

import { styled } from "@mui/material";
import React, { forwardRef, HTMLAttributes } from "react";
import { useThemeProps } from "@mui/material/styles";

export interface StatProps {
  value: number | string;
  unit: string;
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
  flexDirection: "column",
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  letterSpacing: "-0.025em",
  fontWeight: 600,
  ...(ownerState.variant === "outlined" && {
    border: `2px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

const StatValue = styled("div", {
  name: "MuiStat",
  slot: "value",
})(({ theme }) => ({
  ...theme.typography.h3,
}));

const StatUnit = styled("div", {
  name: "MuiStat",
  slot: "unit",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Stat = forwardRef<HTMLDivElement, StatProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: "MuiStat" });
  const { value, unit, variant, ...other } = props;

  const ownerState = { ...props, variant };

  return (
    <StatRoot ref={ref} ownerState={ownerState} {...other}>
      <StatValue>{value}</StatValue>
      <StatUnit>{unit}</StatUnit>
    </StatRoot>
  );
});

export default Stat;
