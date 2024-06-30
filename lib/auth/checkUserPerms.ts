import { createClient } from "@/utils/supabase/server";

export const checkUserPerms = async (
  operation: "select" | "insert" | "update" | "delete",
  tablename: string
) => {
  const supabase = createClient();

  const { data, error } = await supabase.rpc("check_permission", {
    operation,
    tablename,
  });

  return { data, error };
};
