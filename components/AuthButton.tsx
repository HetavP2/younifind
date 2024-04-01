"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

export interface AuthButtonProps {
  className?: string;
  session: Session | null;
}

const AuthButton: React.FC<AuthButtonProps> = ({ className, session }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (pathname === "/") {
      router.refresh();
    } else {
      router.replace("/");
    }

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out");
    }
  };

  return session ? (
    <button
      onClick={handleSignOut}
      className={`px-2 py-1 bg-royalyellow text-royalblue` + className}
    >
      Logout
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      // bg-royalyellow
      // text-white px-2 py-1
      className={className}
    >
      Login
    </button>
  );
};

export default AuthButton;
