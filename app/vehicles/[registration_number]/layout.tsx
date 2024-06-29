"use client";
import Car from "@/components/Icons/Car";
import {
  AttachMoneyOutlined,
  ConstructionOutlined,
  Inventory2Outlined,
} from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";

export default function VehicleLayout(props: {
  children: Readonly<React.ReactNode>;
  params?: { registration_number: string };
}) {
  const segment = useSelectedLayoutSegment() || "general";
  return (
    <>
      <Tabs value={segment} variant="scrollable">
        <Tab
          label="General"
          icon={<Car />}
          iconPosition="start"
          value={"general"}
          href={`/vehicles/${props.params?.registration_number}`}
        />
        <Tab
          label="Services"
          icon={<ConstructionOutlined />}
          iconPosition="start"
          value={"services"}
          href={`/vehicles/${props.params?.registration_number}/services`}
        />
        <Tab
          label="Expenses"
          icon={<AttachMoneyOutlined />}
          iconPosition="start"
          value={"expenses"}
          href={`/vehicles/${props.params?.registration_number}/expenses`}
        />
        <Tab
          label="Documents"
          icon={<Inventory2Outlined />}
          iconPosition="start"
          value={"documents"}
          href={`/vehicles/${props.params?.registration_number}/documents`}
        />
      </Tabs>

      {props.children}
    </>
  );
}
