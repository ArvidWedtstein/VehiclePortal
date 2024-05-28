"use server";

import { FormData } from "@/components/Vehicles/VehicleDialog/VehicleDialog";
import { createClient } from "@/utils/supabase/server";
import { Vehicle } from "vehicle";

export async function createVehicle(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const supabase = createClient();

  const { error } = await supabase.from("Vehicles").insert({
    name: formData.name,
    vehicle_identification_number: formData.vin,
    register_number: formData.register_number,
    model: formData.model,
  });

  return { message: error?.message || "New Vehicle Created" };
}

export async function getVehicleData({
  registernumber,
}: {
  registernumber: string;
}) {
  const res = await fetch(
    `https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=${registernumber}`,
    {
      headers: {
        "Content-Type": "application/json",
        "SVV-Authorization": process.env.SVV_API_KEY || "",
      },
    }
  );

  return res.json() as Promise<Vehicle>;
}
