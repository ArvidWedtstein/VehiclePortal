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
  engine_id?: number;
  transmission_id?: number;
  eu_control_date?: string;
};

type ColumnsToReturn<T, C> = C extends "*" ? T : Pick<T, Extract<C, keyof T>>;

type FilterKeys<T> = {
  [K in keyof T]?: T[K];
};

export default async function getVehicles<
  Columns extends (keyof Vehicle | "*")[]
>(
  filters?: FilterKeys<Vehicle>,
  columns: Columns = ["*"] as Columns
): Promise<Vehicle[]> {
  const supabase = createClient();
  const { data: vehicles, error } = await supabase
    .from("Vehicles")
    .select(columns.join(","))
    .match(filters || {})
    .returns<Vehicle[]>();

  if (error) {
    return notFound();
  }

  return vehicles;
}

// TODO: add relations to
export const getVehicle = async <Columns extends (keyof Vehicle | "*")[]>(
  filters?: FilterKeys<Vehicle>,
  columns: Columns = ["*"] as Columns
): Promise<ColumnsToReturn<Vehicle, Columns[number]>> => {
  const supabase = createClient();
  const { data: vehicle, error } = await supabase
    .from("Vehicles")
    .select(columns.join(","))
    .match(filters || {})
    .returns<Vehicle>()
    .single();

  if (error) {
    return notFound();
  }

  return vehicle as ColumnsToReturn<Vehicle, Columns[number]>;
};
