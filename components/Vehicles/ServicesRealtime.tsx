import { createClient } from "@/utils/supabase/server";
import ServicesRealtimeGrid from "./ServicesRealtimeGrid";
import { notFound } from "next/navigation";
import getServiceTypes from "../Lookups/ServiceTypes/ServiceTypes";

export const revalidate = 0;

export type ServiceLog = {
  id: number;
  created_at: string;
  createdby_id: string;
  vehicle_id: number;
  cost: number;
  currency: string;
  service_type_id: number;
  service_provider?: string;
  service_date?: string;
  odometer_reading?: number;
  notes?: string;
};

export interface ServiceLogWithType extends ServiceLog {
  ServiceTypes: {
    id: number;
    name: string;
  };
}

export default async function ServicesRealtime({
  vehicle_id,
}: {
  vehicle_id: number;
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("VehicleServiceLogs")
    .select("*")
    .match({ vehicle_id: vehicle_id })
    .returns<ServiceLog[]>();

  if (!data || error) {
    return notFound();
  }

  const serviceTypes = await getServiceTypes();

  return (
    <ServicesRealtimeGrid serviceLogs={data} serviceTypes={serviceTypes} />
  );
}
