import getServiceLogs from "@/components/Lookups/ServiceLogs/ServiceLogs";
import { getVehicle } from "@/components/Lookups/Vehicles/Vehicles";
import ServicesRealtimeGrid from "@/components/Vehicles/Services/ServicesGrid/ServicesRealtimeGrid";

interface ServicesPage {
  params: { registration_number: string };
  searchParams: Record<string, string>;
}
export default async function ServicesPage({
  params: { registration_number },
}: ServicesPage) {
  const vehicle = await getVehicle({ register_number: registration_number }, [
    "id",
  ]);
  const serviceLogs = await getServiceLogs({ vehicle_id: vehicle.id });

  return (
    <ServicesRealtimeGrid serviceLogs={serviceLogs} vehicle_id={vehicle.id} />
  );
}
