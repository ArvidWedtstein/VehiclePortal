"use server";

import { getProfile } from "@/components/Lookups/Profiles/Profiles";
import Stat from "@/components/Stat";
import { createClient } from "@/utils/supabase/server";
import { Avatar, Container, Grid } from "@mui/material";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import { format } from "path";

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
          <Stat
            description={user.user_metadata?.full_name || ""}
            header={"Name"}
          />
        </Grid>
        <Grid item xs={3}>
          <Stat description={user?.role || ""} header={"Role"} />
        </Grid>
        <Grid item xs={3}>
          <Stat
            description={
              dayjs(user?.last_sign_in_at).format("DD.MM.YYYY HH:mm:ss") || ""
            }
            header={"Last Signed in"}
          />
        </Grid>
        <Grid item xs={3}>
          <Stat
            description={
              dayjs(user.created_at).format("DD.MM.YYYY HH:mm:ss") || ""
            }
            header={"Created"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
