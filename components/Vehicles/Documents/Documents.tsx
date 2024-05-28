"use server";

import { getDocuments } from "@/components/Lookups/Documents/Documents";
import { createClient } from "@/utils/supabase/server";
import { Image } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { notFound } from "next/navigation";
import DocumentsList from "./DocumentsList";

export default async function Documents({
  vehicle_id,
  register_number,
}: {
  vehicle_id: number;
  register_number: string;
}) {
  const documents = await getDocuments({ vehicle_id: vehicle_id });
  const supabase = createClient();

  const { data, error } = documents.length
    ? await supabase.storage.from("VehicleDocuments").createSignedUrls(
        documents.map((document) => `${register_number}/${document.name}`),
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
