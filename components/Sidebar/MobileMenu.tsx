"use client";

import theme from "@/theme";
import { Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MobileMenuProps = {
  pages: { name: string; icon: any; href: string }[];
  user: User | null;
};
export default function MobileMenu({ pages, user }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
        zIndex: 1000,
        background: theme.palette.primary.main,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={pathname}>
        {pages.map((page, index) => (
          <BottomNavigationAction
            label={page.name}
            icon={<page.icon />}
            key={`page-${index}`}
            href={page.href}
            value={page.href}
          />
        ))}

        {user ? (
          <BottomNavigationAction
            value={"profile"}
            label="Profile"
            icon={<Person />}
            href={`/profile/${user.id}`}
          />
        ) : (
          <BottomNavigationAction
            label="Login"
            icon={<Person />}
            href={`/login`}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
