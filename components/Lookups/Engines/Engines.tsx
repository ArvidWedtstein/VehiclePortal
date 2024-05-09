"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type Engine = {
  id: number;
  created: string;
  createdby_id?: string | null;
  name?: string;
  displacement?: number;
  manufacturer?: string;
  fuel_type?: string;
  code?: string | null;
  type?: string | null;
  horsepower?: number;
  kilowatt?: number;
  valves?: number;
  compression_ratio?: number;
};

export default async function getEngines(): Promise<Engine[]> {
  const supabase = createClient();
  const { data: engines, error } = await supabase
    .from("VehicleEngines")
    .select("*");

  if (error) {
    return notFound();
  }

  return engines;
}
