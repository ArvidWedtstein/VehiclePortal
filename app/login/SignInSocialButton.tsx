"use client";

import Discord from "@/components/Icons/Discord";
import Google from "@/components/Icons/Google";
import { Facebook } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";
import { signInWith } from "./SignInSocialButtonActions";

interface SignInSocialButtonProps extends ButtonProps {
  social: "google" | "facebook" | "discord";
}
export default function SignInSocialButton({
  social,
  ...other
}: SignInSocialButtonProps) {
  const handleClick = () => {};

  const icon =
    social === "discord" ? (
      <Discord />
    ) : social === "facebook" ? (
      <Facebook />
    ) : (
      <Google />
    );

  return (
    <Button {...other} startIcon={icon} onClick={() => signInWith(social)}>
      {other.children}
    </Button>
  );
}
