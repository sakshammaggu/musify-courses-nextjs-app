"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Tech">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/course" ><span className="hover:text-yellow-500 transition-colors duration-300">All Tech Courses</span></HoveredLink>
                        <HoveredLink href="/course/FullStackWebDev"><span className="hover:text-yellow-500 transition-colors duration-300">Full Stack Web Development</span></HoveredLink>
                        <HoveredLink href="/course/Aiml"><span className="hover:text-yellow-500 transition-colors duration-300">Artificial Intelligence and Machine Learning</span></HoveredLink>
                    </div>
                </MenuItem>

                <Link href={'/about'}>
                    <MenuItem setActive={setActive} active={active} item="About">
            
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar