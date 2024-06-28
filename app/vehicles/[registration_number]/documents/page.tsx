import { getDocuments } from "@/components/Lookups/Documents/Documents";
import { getVehicle } from "@/components/Lookups/Vehicles/Vehicles";
import DocumentsList from "@/components/Vehicles/Documents/DocumentsList";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

interface DocumentsPage {
  params: { registration_number: string };
  searchParams: Record<string, string>;
}
export default async function DocumentsPage({
  params: { registration_number },
}: DocumentsPage) {
  const vehicle = await getVehicle({ register_number: registration_number }, [
    "id",
  ]);

  const supabase = createClient();

  const documents = await getDocuments({ vehicle_id: vehicle.id });

  const { data, error } = documents.length
    ? await supabase.storage.from("VehicleDocuments").createSignedUrls(
        documents.map((document) => `${registration_number}/${document.name}`),
        42069
      )
    : { data: documents, error: null };

  if (error) {
    console.error(error);
    return notFound();
  }

  const documentsWithUrls = documents.map((document, index) => ({
    ...document,
    ...data[index],
  }));

  return documentsWithUrls ? (
    <DocumentsList documents={documentsWithUrls || []} />
  ) : (
    ""
  );
}
