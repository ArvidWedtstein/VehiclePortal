import { redirect } from "next/navigation";

export default function VehiclePage({ params }: any) {
  redirect(`/vehicles/${params.registration_number}/general`);
}
