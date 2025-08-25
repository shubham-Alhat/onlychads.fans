"use client";

import { logout } from "@/lib/auth.action";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  return (
    <Button
      onClick={() => logout()}
      className="ml-2 border-foreground text-foreground bg-primary hover:bg-accent hover:border-foreground"
    >
      {/* Icon only on small screens */}
      <LogOut className="h-5 w-5 block md:hidden" />

      {/* Text only on medium and above */}
      <span className="hidden md:block font-medium">Logout</span>
    </Button>
  );
};
