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
  console.log("DAS FORMDATA", formData);

  const { error } = await supabase.from("Vehicles").insert(formData);

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
