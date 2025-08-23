"use server";
import { Hero1 } from "@/components/LoginPage";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await auth();

  if (session && session.user) {
    redirect("/profile");
  }

  return (
    <>
      <Hero1 />
    </>
  );
}

export default Login;
