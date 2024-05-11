"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type Vehicle = {
  id: number;
  created_at: string;
  createdby_id: string;
  name: string;
  model?: number;
  make?: string;
  manufacturer?: string;
  drivetrain?: string;
  width?: number | null;
  length?: number | null;
  height?: number | null;
  body_type?: string;
  register_number?: string;
  vehicle_identification_number?: string | null;
};

export default async function getVehicles(
  filters?:
    | {
        id?: number;
      }
    | undefined
): Promise<Vehicle[]> {
  const supabase = createClient();
  const { data: vehicles, error } = await supabase
    .from("Vehicles")
    .select("*")
    .match(filters || {})
    .returns<Vehicle[]>();

  if (error) {
    return notFound();
  }

  return vehicles;
}
