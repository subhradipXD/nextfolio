import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { IoPersonOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { PiGitDiffLight } from "react-icons/pi";
import { TbMessage2 } from "react-icons/tb";

export function Navbar() {
    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#home",
        },
        {
            title: "About Me",
            icon: <IoPersonOutline className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#about",
        },
        {
            title: "My Works",
            icon: <PiGitDiffLight className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#works",
        },
        {
            title: "My Education",
            icon: <IoSchoolOutline className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#education",
        },
        {
            title: "My Skills",
            icon: <IoCodeSlashOutline className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#skills",
        },
        {
            title: "Contact Me",
            icon: <TbMessage2 className="h-full w-full text-neutral-900 dark:text-neutral-300" />,
            href: "#contact",
        },
    ];

    return (
        <div className="fixed md:bottom-5 md:w-full flex items-center justify-center bg-transparent bottom-5 right-5 w-auto md:bg-transparent z-50">
            <FloatingDock items={links} />
        </div>
    );
}