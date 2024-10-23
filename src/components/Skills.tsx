"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import java from "@/public/icons/java-svgrepo-com.svg";
import mysql from "@/public/icons/mysql-logo-svgrepo-com.svg";
import html from "@/public/icons/html-5-svgrepo-com.svg";
import css from "@/public/icons/css-3-svgrepo-com.svg";
import js from "@/public/icons/javascript-svgrepo-com.svg";
import ts from "@/public/icons/typescript-svgrepo-com.svg";
import react from "@/public/icons/reactjs-svgrepo-com.svg";
import next from "@/public/icons/icons8-nextjs.svg";
import node from "@/public/icons/nodejs-icon-svgrepo-com.svg";
import express from "@/public/icons/icons8-express-js.svg";
import bootstrap from "@/public/icons/bootstrap-svgrepo-com.svg";
import spring from "@/public/icons/spring-icon-svgrepo-com.svg";
import tailwind from "@/public/icons/tailwindcss-icon-svgrepo-com.svg";
import mongo from "@/public/icons/mongo-svgrepo-com.svg";
import fire from "@/public/icons/firebase-svgrepo-com.svg";
import BlurIn from "./ui/blur-in";
const skills = [
    {
        id: 1,
        name: "Java",
        designation: "",
        image: java,
    },
    {
        id: 2,
        name: "MySQL",
        designation: "",
        image:
            mysql,
    },
    {
        id: 3,
        name: "JavaScript",
        designation: "",
        image:
            js,
    },
    {
        id: 4,
        name: "TypeScript",
        designation: "",
        image:
            ts,
    },
    {
        id: 5,
        name: "HTML",
        designation: "",
        image:
            html,
    },

];
const skills2 = [
    {
        id: 1,
        name: "Next.js",
        designation: "",
        image:
            next,
    },
    {
        id: 2,
        name: "Node.js",
        designation: "",
        image:
            node,
    },
    {
        id: 3,
        name: "Express.js",
        designation: "",
        image:
            express,
    },
    {
        id: 4,
        name: "Bootstrap",
        designation: "",
        image:
            bootstrap,
    },
    {
        id: 5,
        name: "TailwindCSS",
        designation: "",
        image:
            tailwind,
    },

];
const skills3 = [
    {
        id: 1,
        name: "CSS",
        designation: "",
        image:
            css,
    },
    {
        id: 2,
        name: "React.js",
        designation: "",
        image:
            react,
    },
    {
        id: 3,
        name: "SpringBoot",
        designation: "",
        image:
            spring,
    },
    {
        id: 4,
        name: "MongoDB",
        designation: "",
        image:
            mongo,
    },
    {
        id: 5,
        name: "FireBase",
        designation: "",
        image:
            fire,
    },
];

import { Caesar_Dressing } from 'next/font/google';
const caesarDressing = Caesar_Dressing({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
export function Skills() {
    return (
        <>
            <BlurIn
                word="Skills"
                className={`text-xl text-black dark:text-white text-center ${caesarDressing.className}`}
            />
            <div className="w-full p-10 lg:mr-20">
                <div className="flex flex-row items-center justify-center mb-5 w-full">
                    <AnimatedTooltip items={skills} />
                </div>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={skills2} />
                </div>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={skills3} />
                </div>
            </div>
        </>
    );
}

