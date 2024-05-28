import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect, useSearchParams } from "next/navigation";
import { SubmitButton } from "./submit-button";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

import SignInSocialButton from "./SignInSocialButton";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string; mode: string };
}) {
  return (
    <Container component="main" maxWidth="xs">
      <MuiLink href="/" variant="body2">
        <ChevronLeft />
        Back
      </MuiLink>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <SignInSocialButton
                variant="outlined"
                color="secondary"
                fullWidth
                social="google"
              >
                Sign In
              </SignInSocialButton>
            </Grid>
            <Grid item xs={4}>
              <SignInSocialButton
                variant="outlined"
                color="secondary"
                fullWidth
                social="discord"
                disabled
              >
                Sign In
              </SignInSocialButton>
            </Grid>
            <Grid item xs={4}>
              <SignInSocialButton
                variant="outlined"
                color="secondary"
                fullWidth
                social="facebook"
                disabled
              >
                Sign In
              </SignInSocialButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
