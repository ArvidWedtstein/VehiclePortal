"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type Expense = {
  id: number;
  created_at: string;
  createdby_id: string;
  vehicle_id: number;
  expense_date: string;
  expense_type?: string;
  amount?: number;
  unit?: string;
  odometer_reading?: number;
  cost?: number;
  currency?: string;
  notes?: string;
};

export const getExpenses = async (
  filters?:
    | {
        id?: number;
        vehicle_id?: number;
      }
    | null
    | undefined
): Promise<Expense[]> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("VehicleExpenses")
    .select("*")
    .match(filters || {})
    .returns<Expense[]>();

  if (error) {
    return notFound();
  }

  return data;
};

export const deleteExpense = async (id: number) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("VehicleExpenses")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
};

export const updateExpense = async (id: number, newData: Partial<Expense>) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("VehicleExpenses")
    .update(newData)
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
};
