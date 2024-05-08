import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import {
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
import { Inbox, Mail } from "@mui/icons-material";
import Sidebar from "@/components/Sidebar/Sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Vehicle DB",
  description: "Tralalal",
};
// https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=TF21166
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100vh" }}>
      <body style={{ height: "100%" }}>
        <AppRouterCacheProvider>
          <Head>VehiclePortal</Head>
          <ThemeProvider theme={theme}>
            <Navbar />

            <Grid container spacing={0}>
              <Grid item xs={0} md={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} md={10}>
                {children}
              </Grid>
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
