"use server";

import ServicesRealtimeGrid from "./ServicesRealtimeGrid";
import getServiceLogs from "@/components/Lookups/ServiceLogs/ServiceLogs";

export default async function ServicesRealtime({
  vehicle_id,
}: {
  vehicle_id: number;
}) {
  const serviceLogs = await getServiceLogs({ vehicle_id });

  return <ServicesRealtimeGrid serviceLogs={serviceLogs} />;
}
