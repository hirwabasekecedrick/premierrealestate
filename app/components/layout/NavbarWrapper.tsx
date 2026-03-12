"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function NavbarWrapper() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (isHomePage) return null;

    return (
        <div className="pt-[98px]">
            <Navbar />
        </div>
    );
}
