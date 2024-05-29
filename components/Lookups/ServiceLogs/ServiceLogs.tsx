"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type ServiceLog = {
  id: number;
  created_at: string;
  createdby_id: string;
  vehicle_id: number;
  cost: number;
  currency: string;
  type: string;
  service_provider?: string;
  service_date?: string;
  odometer_reading?: number;
  notes?: string;
};

export default async function getServiceLogs(
  filters?:
    | {
        id?: number;
        vehicle_id?: number;
      }
    | null
    | undefined
): Promise<ServiceLog[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("VehicleServiceLogs")
    .select("*")
    .match(filters || {})
    .returns<ServiceLog[]>();

  if (error) {
    return notFound();
  }

  return data;
}
