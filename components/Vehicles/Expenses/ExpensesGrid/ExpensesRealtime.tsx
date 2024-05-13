"use server";

import ExpensesRealtimeGrid from "./ExpensesRealtimeGrid";
import { getExpenses } from "@/components/Lookups/Expenses/Expenses";

export default async function ExpensesRealtime({
  vehicle_id,
}: {
  vehicle_id: number;
}) {
  const expenses = await getExpenses({ vehicle_id });

  return <ExpensesRealtimeGrid expenses={expenses} />;
}
