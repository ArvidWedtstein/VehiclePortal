import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function VehiclePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("Vehicles")
    .select()
    .match({ id: slug })
    .single();

  if (!data) {
    notFound();
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
