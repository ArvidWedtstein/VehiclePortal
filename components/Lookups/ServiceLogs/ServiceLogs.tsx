"use server";

import { createClient } from "@/utils/supabase/server";
import { FilterKeys } from "@/utils/utils";
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

export default async function getServiceLogs<
  Columns extends (keyof ServiceLog | "*")[]
>(
  filters?: FilterKeys<ServiceLog>,
  columns: Columns = ["*"] as Columns
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
