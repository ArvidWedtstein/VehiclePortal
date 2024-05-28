"use client";
import { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { User } from "@supabase/supabase-js";

export default function ProfileMenu({
  children,
  user,
}: {
  children?: React.ReactNode;
  user?: Partial<User>;
}) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt={"User"} src={user?.user_metadata?.avatar_url} />
      </IconButton>

      <Typography sx={{ ml: 2 }} variant="subtitle1">
        {user?.user_metadata?.full_name}
      </Typography>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {children}
      </Menu>
    </>
  );
}
