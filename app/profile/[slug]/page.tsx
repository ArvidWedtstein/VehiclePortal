"use server";

import Stat from "@/components/Stat";
import { createClient } from "@/utils/supabase/server";
import { Container, Grid } from "@mui/material";
import { redirect } from "next/navigation";

export default async function ProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <Container maxWidth="xl" sx={{ my: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Stat value={user?.role || ""} unit={"Role"} />
        </Grid>
        <Grid item xs={3}>
          <Stat
            value={
              new Date(user.created_at).toLocaleString("en-GB", {
                dateStyle: "long",
              }) || ""
            }
            unit={"Created"}
          />
        </Grid>
        <div>Params: {params.slug}</div>
      </Grid>
    </Container>
  );
}
