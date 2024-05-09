"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type Transmission = {
  id: number;
  created: string;
  createdby_id?: string | null;
  name?: string;
  gears?: number;
  manufacturer?: string;
  type?: string | null;
};

export default async function getTransmissions(): Promise<Transmission[]> {
  const supabase = createClient();
  const { data: transmissions, error } = await supabase
    .from("VehicleTransmissions")
    .select("*");

  if (error) {
    return notFound();
  }

  return transmissions;
}
