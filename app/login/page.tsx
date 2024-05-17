import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect, useSearchParams } from "next/navigation";
import { SubmitButton } from "./submit-button";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useCallback } from "react";
import { ChevronLeft } from "@mui/icons-material";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string; mode: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: `${origin}/auth/callback`,
      // },
    });

    if (error) {
      return redirect(`/login?message=${error.message}`);
    }

    return redirect("/login?message=yeey");
  };

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
          Log In / Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <SubmitButton
                type="submit"
                formAction={signIn}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </SubmitButton>
            </Grid>
            <Grid item xs={6}>
              <SubmitButton
                type="submit"
                formAction={signUp}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </SubmitButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
