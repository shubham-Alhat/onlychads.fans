"use server";
import { SignInButton } from "@/components/SignInButton";
import { auth } from "../../auth";
import { SignOutButton } from "@/components/SignOutButton";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session); // if loggedIn ? "user data" : "null"
  if (session && session?.user) {
    return (
      <>
        <div className="text-xl text-blue-400">
          <span>{session.user.name}</span>
          <br />
          <span>{session.user.email}</span>
          <br />
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <SignOutButton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex justify-center items-center mt-7 text-blue-400 text-4xl">
        Hello World
      </div>
      <div className="mt-5 w-full flex justify-center flex-col">
        You are not signIn
        <br />
        {"   "}
      </div>
      <SignInButton />
    </>
  );
}
