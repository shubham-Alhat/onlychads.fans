import React from "react";
import { auth } from "../../../auth";
import ProfileHeader from "@/components/ProfileHeader";

const Profile = async () => {
  const session = await auth();
  // console.log(session?.user);
  return (
    <>
      <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
        <ProfileHeader user={session?.user} />
      </section>
    </>
  );
};

export default Profile;
