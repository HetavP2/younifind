import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import AuthButton from "./AuthButton";

interface AuthSystemProps {
    className?: string;
}

const AuthSystem: React.FC<AuthSystemProps> = async ({
  className
}) => {
  
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
    } = await supabase.auth.getSession();
    
    return <AuthButton className={className} session={session}/>;
};

export default AuthSystem;
