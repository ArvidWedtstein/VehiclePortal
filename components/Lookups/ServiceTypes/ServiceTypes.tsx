"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export type ServiceType = {
  id: number;
  name: string;
};

export default async function getServiceTypes(): Promise<ServiceType[]> {
  const supabase = createClient();
  const { data: serviceTypes, error } = await supabase
    .from("ServiceTypes")
    .select("*")
    .returns<ServiceType[]>();

  if (error) {
    return notFound();
  }

  return serviceTypes;
}
