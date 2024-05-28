"use client";

import { Link as MUILink, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <MUILink underline="hover" color="inherit" href="/">
        Home
      </MUILink>
      {pathNames.map((path, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;

        return (
          <MUILink
            key={index}
            underline="hover"
            color={paths === href ? "InfoText" : "inherit"}
            component={Link}
            href={href}
            textTransform={"capitalize"}
          >
            {path}
          </MUILink>
        );
      })}
    </MUIBreadcrumbs>
  );
};
