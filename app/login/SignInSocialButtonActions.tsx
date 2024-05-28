"use server";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWith = async (
  type: "google" | "discord" | "facebook" = "google"
) => {
  const origin = headers().get("origin");
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: type,
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    throw error;
  }

  if (data.url) {
    redirect(data.url);
  }

  return redirect("/protected");
};
