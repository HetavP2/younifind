"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

export interface AuthButtonProps {
  className?: string;
  session: Session | null;
}

const AuthButton: React.FC<AuthButtonProps> = ({ className, session }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

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
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out");
    }
  };

  return session ? (
    <button onClick={handleSignOut} className={className}>
      Logout
    </button>
  ) : (
    <button onClick={handleSignIn} className={className}>
      Login
    </button>
  );
};

export default AuthButton;
