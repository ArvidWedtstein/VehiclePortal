"use server";

import { createClient } from "@/utils/supabase/server";
import { FilterKeys } from "@/utils/utils";
import { notFound } from "next/navigation";

export type VehicleShares = {
  id: number;
  created_at: string;
  createdby_id: string;
  updated_at: string;
  vehicle_id: number;
  user_id: string;
};

export async function getVehiclesShared<
  Columns extends (keyof VehicleShares | "*")[]
>(
  filters?: FilterKeys<VehicleShares>,
  columns: Columns = ["*"] as Columns
): Promise<VehicleShares[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("VehiclesShared")
    .select(columns.join(","))
    .match(filters || {})
    .returns<VehicleShares[]>();

  if (error) {
    return notFound();
  }

  return data;
}

export async function shareVehicle({
  user_id,
  vehicle_id,
}: {
  user_id: VehicleShares["user_id"];
  vehicle_id: VehicleShares["vehicle_id"];
}) {
  try {
    const supabase = createClient();

    console.log(parseInt(vehicle_id.toString() as string), user_id);
    const { data, error } = await supabase
      .from("VehicleShares")
      .upsert({ vehicle_id, user_id })
      .single();

    console.log(data, error);
    return { data, error };
  } catch (pErr) {}
}
