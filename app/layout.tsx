import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";
import { Metadata } from "next";
import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Vehicle Portal",
  description: "Tralalal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100vh", overflowX: "hidden" }}>
      <body style={{ height: "100%" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Grid container spacing={0}>
              <Grid item xs={0} md={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} md={10} overflow={"auto"} pb={8}>
                {children}
              </Grid>
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
