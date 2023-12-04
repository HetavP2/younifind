"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};

  return (
    <div>
      <div>
        <div>
          <button onClick={() => router.back()}>B1</button>
          <button onClick={() => router.forward()}>B2</button>
        </div>
        <div>
          <button>
            <HiHome size={20} />
          </button>
          <button>
            <BiSearch size={20} />
          </button>
        </div>
        <div>
          <>
            <div>
              <Button onClick={() => {}}>Sign Up</Button>
              <br />
              <br />
              <Button onClick={() => {}}>Login In</Button>
            </div>
          </>
        </div>
          </div>
          {children}
    </div>
  );
};

export default Header;
