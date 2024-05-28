"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Engine } from "../Engines/Engines";
import { ColumnsToReturn, FilterKeys } from "@/utils/utils";

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
  VehicleEngines?: Engine;
  type?: string;
  fuel_capacity?: number;
};

// export enum VehicleCategories {
//   "L3e" = "Lett Motorsykkel",
//   "MCT" = "Tung Motorsykkel",
//   "M1" = "Personbil",
// }

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
