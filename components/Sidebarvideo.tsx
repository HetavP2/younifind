'use client';

import { usePathname } from "next/navigation";
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(
      () => [
        {
          // path is active everytime its not search
          icon: HiHome,
          label: "Home",
          active: pathname !== "/search",
          href: "/",
        },
        //these are all the pathnames
        {
          icon: BiSearch,
          label: "Search",
          active: pathname === "/search",
          href: "/search",
        },
        {
          icon: BiSearch,
          label: "Dashboard",
          active: pathname === "/dashboard",
          href: "/dashboard",
        },
      ],
      [pathname]
    );
    return (
        <div className="flex h-full">
            <div className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2">

                <Box>
                    <div className="
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                    ">
                        {routes.map((item) => {
                            return <SidebarItem
                                key={item.label}
                                {...item}
                            />
                        })}

                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library />
                </Box>   
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;