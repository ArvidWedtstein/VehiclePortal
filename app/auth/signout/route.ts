import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }

  return NextResponse.redirect(origin);
}
