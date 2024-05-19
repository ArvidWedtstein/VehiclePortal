"use server";

import { createClient } from "@/utils/supabase/server";
import { FilterKeys } from "@/utils/utils";
import { notFound } from "next/navigation";

export type Document = {
  id: number;
  created_at: string;
  vehicle_id: number;
  name: string;
  type?: string;
  service_log_id?: number;
  file_id: string;
};

type SelectColumns<T, C extends (keyof T)[] | ["*"]> = C extends ["*"]
  ? T
  : Pick<T, Extract<C[number], keyof T>>;

// for upload:https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/file-upload-storage/index.ts
export const getDocuments = async <Columns extends (keyof Document)[] | ["*"]>(
  filters?: FilterKeys<Document>,
  columns: Columns = ["*"] as Columns
): Promise<SelectColumns<Document, Columns>[]> => {
  const supabase = createClient();
  const { data: documents, error } = await supabase
    .from("VehicleDocuments")
    .select(columns.join(","))
    .match(filters || {})
    .returns<Document[]>();

  if (error) {
    throw error;
  }

  // let l: ColumnsToReturn<Document, Columns[number]> = { name: '', created: '', id: 0, file_id: '', vehicle_id: 3, type: '' }

  return documents as SelectColumns<Document, Columns>[];
};

export const uploadFile = async (path: string, file: File | undefined) => {
  const supabase = createClient();

  if (!file) {
    return;
  }

  const { data, error } = await supabase.storage
    .from("VehicleDocuments")
    .upload(path, file);

  if (error) {
    throw error;
  }

  console.log(data, error);
};
