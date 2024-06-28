import { getExpenses } from "@/components/Lookups/Expenses/Expenses";
import { getVehicle } from "@/components/Lookups/Vehicles/Vehicles";
import ExpensesRealtimeGrid from "@/components/Vehicles/Expenses/ExpensesGrid/ExpensesRealtimeGrid";

interface ExpensesPage {
  params: { registration_number: string };
  searchParams: Record<string, string>;
}
export default async function ExpensesPage({
  params: { registration_number },
}: ExpensesPage) {
  const vehicle = await getVehicle({ register_number: registration_number }, [
    "id",
  ]);
  const expenses = await getExpenses({ vehicle_id: vehicle.id });

  return <ExpensesRealtimeGrid expenses={expenses} />;
}
