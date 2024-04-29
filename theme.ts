"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme as MuiTheme,
} from "@mui/material/styles";
import { StatProps } from "./components/Stat";

type Theme = Omit<MuiTheme, "components">;

declare module "@mui/material/styles" {
  interface ComponentNameToClassKey {
    MuiStat: "root" | "value" | "unit";
  }

  interface ComponentsPropsList {
    MuiStat: Partial<StatProps>;
  }

  interface Components {
    MuiStat?: {
      defaultProps?: ComponentsPropsList["MuiStat"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiStat"];
      variants?: ComponentsVariants["MuiStat"];
    };
  }
}

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiStat: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
});

export default theme;
