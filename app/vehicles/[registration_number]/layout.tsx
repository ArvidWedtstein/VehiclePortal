export default function VehicleLayout(props: {
  children: React.ReactNode;
  services: React.ReactNode;
  documents: React.ReactNode;
}) {
  console.log(props);
  return (
    <>
      {props.children}
      {props.services}
    </>
  );
}
