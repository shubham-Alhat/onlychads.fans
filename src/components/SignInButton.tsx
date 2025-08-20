"use client";

import { login } from "@/lib/auth.action";

export const SignInButton = () => {
  return (
    <button
      onClick={() => login()}
      className="mt-1.5 cursor-pointer  bg-blue-500 text-xl"
    >
      Sign In with google
    </button>
  );
};
