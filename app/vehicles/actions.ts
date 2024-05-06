"use server";

import { createClient } from "@/utils/supabase/server";
import { Vehicle } from "vehicle";

export async function createVehicle(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const formJson = Object.fromEntries((formData as FormData).entries());
  console.log("DAS FORMDATA", formJson);

  return { message: "New Vehicle Created" };
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
