import { Box } from "@mui/material";
import { Header } from "@/components/Header/Header";

export default async function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box sx={{ px: { xs: 1, md: 2 } }}>{children}</Box>
    </>
  );
}
