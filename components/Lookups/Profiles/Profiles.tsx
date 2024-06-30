"use server";

import { createClient } from "@/utils/supabase/server";
import { FilterKeys } from "@/utils/utils";
import { notFound } from "next/navigation";

export type Profile = {
  id: number;
  created_at: string;
  profile_image_url?: string;
  name?: string;
  user_id: string;
  role_id?: number;
};

type SelectColumns<T, C extends (keyof T)[] | ["*"]> = C extends ["*"]
  ? T
  : Pick<T, Extract<C[number], keyof T>>;

export const getProfiles = async <Columns extends (keyof Profile)[] | ["*"]>(
  filters?: FilterKeys<Profile>,
  columns: Columns = ["*"] as Columns
): Promise<SelectColumns<Profile, Columns>[]> => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error } = await supabase
    .from("Profiles")
    .select(columns.join(","))
    .neq("user_id", user?.id || "")
    // .match(filters || {})
    .returns<Profile[]>();

  if (error) {
    throw error;
  }

  return profile as SelectColumns<Profile, Columns>[];
};

export const getProfile = async <Columns extends (keyof Profile)[] | ["*"]>(
  filters?: FilterKeys<Profile>,
  columns: Columns = ["*"] as Columns
): Promise<SelectColumns<Profile, Columns>> => {
  const supabase = createClient();
  const { data: profile, error } = await supabase
    .from("Profiles")
    .select(columns.join(","))
    .match(filters || {})
    .returns<Profile[]>()
    .single();

  if (error) {
    throw error;
  }

  return profile as SelectColumns<Profile, Columns>;
};
