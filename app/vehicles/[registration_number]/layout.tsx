export default async function VehicleLayout(props: {
  children: React.ReactNode;
  services: React.ReactNode;
  documents: React.ReactNode;
  params?: { registration_number: string };
}) {
  return <>{props.children}</>;
}
