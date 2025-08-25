import {
  DumbbellIcon,
  HomeIcon,
  LogOut,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import { auth } from "../../auth";
import { logout } from "@/lib/auth.action";
import { SignOutButton } from "./SignOutButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            code<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <SignOutButton />
            </>
          ) : (
            <>
              <Button className="bg-background text-foreground border border-foreground hover:bg-muted">
                <Link href={"/login"}>Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
