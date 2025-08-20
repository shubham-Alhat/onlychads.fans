"use client";

import { logout } from "@/lib/auth.action";

export const SignOutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="mt-1.5 cursor-pointer  bg-red-500 text-xl"
    >
      Logout
    </button>
  );
};
