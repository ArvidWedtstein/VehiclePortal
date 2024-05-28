"use server";

import ServicesRealtimeGrid from "./ServicesRealtimeGrid";
import getServiceTypes from "../../../Lookups/ServiceTypes/ServiceTypes";
import getServiceLogs from "@/components/Lookups/ServiceLogs/ServiceLogs";

export default async function ServicesRealtime({
  vehicle_id,
}: {
  vehicle_id: number;
}) {
  const serviceLogs = await getServiceLogs({ vehicle_id });
  const serviceTypes = await getServiceTypes();

  return (
    <ServicesRealtimeGrid
      serviceLogs={serviceLogs}
      serviceTypes={serviceTypes}
    />
  );
}
