"use server";

import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Breadcrumbs } from "./Breadcrumbs";
import { headers } from "next/headers";
import { getVehicle } from "../Lookups/Vehicles/Vehicles";

export const Header = async () => {
  const headersList = headers();

  const path = headersList
    .get("referer")
    ?.split("/")
    .findLast((p) => p);

  const title = isNaN(parseInt(path || ""))
    ? path
    : (await getVehicle({ id: parseInt(path || "") }, ["register_number"]))
        .register_number;

  return (
    <Box
      sx={{
        borderBottom: "1px solid ActiveBorder",
        minHeight: "2.5rem",
        p: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={1} direction={"column"}>
        <Grid
          item
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"start"}
        >
          <Grid item xs={0} sm={2} md={1}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardBackspaceRoundedIcon />
            </Button>
          </Grid>
          <Grid item xs={"auto"} flexGrow={1}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item xs={1} sm={0}>
            <IconButton
              size="small"
              sx={{
                display: { xs: "inline-flex", sm: "none" },
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1 / 1",
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction={"row"}>
          <Grid item xs={0} sm={2} md={1} />
          <Grid item xs={"auto"}>
            <Breadcrumbs />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
