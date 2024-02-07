"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

export interface AuthLinkProps {
  session: Session | null;
}

const AuthLink: React.FC<AuthLinkProps> = ({ session }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (pathname === "/dashboard") {
      router.replace("/");
    } else {
      router.refresh();
    }

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out");
    }
  };

  return session ? (
    <button
      className={`bg-royalyellow hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200`}
      onClick={handleSignOut}
    >
      Logout
    </button>
  ) : (
    <a
      href="/login"
      className={`bg-royalyellow hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200`}
    >
      Login
    </a>
  );
};

export default AuthLink;
