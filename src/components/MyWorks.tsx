"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import BlurIn from "./ui/blur-in";
import nuxbuy from "@/public/projects/NUXBUY.jpg";
import termilio from "@/public/projects/TERMILIO.png";
import tictactoe from "@/public/projects/TICTACTOE.jpg";
import weather from "@/public/projects/WEATHER.jpg";

export function MyWorks() {
    return (
        <>
            <BlurIn
                word="Projects"
                className="text-xl text-black dark:text-white"
            />
            <div className="flex flex-wrap justify-center -mt-10">
                <div className="mx-5 -mb-20 w-full sm:w-[30rem]">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                NUXBUY
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                An online shopping website make using React.js, TailwindCSS, Firebase, Razorpay, fake-store api.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={nuxbuy}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-end items-center mt-20">
                                {/* <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Go live &rarr;
                                </CardItem> */}
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    href="https://github.com/subhradipXD/NUXBUY"
                                >
                                    View Code &rarr;
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

                <div className="mx-5 -mb-20 w-full sm:w-[30rem]">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                TERMILIO
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                My terminal portfolio make using React.js, TailwindCSS.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={termilio}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://my-termilio.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Go live &rarr;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    href="https://github.com/subhradipXD/my-termilio"
                                >
                                    View Code &rarr;
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

                <div className="mx-5 -mb-20 w-full sm:w-[30rem]">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Tic-Tac-Toe
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Tic-Tac-Toe game make using React.js.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={tictactoe}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://tic-tac-toe-fid4.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Go live &rarr;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    href="https://github.com/subhradipXD/tic-tac-toe"
                                >
                                    View Code &rarr;
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

                <div className="mx-5 -mb-20 w-full sm:w-[30rem]">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                WEATHER-APP
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Weather-App make using React.js, Bootstrap, Open-Weather api.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={weather}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://github.com/subhradipXD/weather-app"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Go live &rarr;
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    href="https://weather-app-azure-eta.vercel.app/"
                                >
                                    View Code &rarr;
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <Link className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" href="https://github.com/subhradipXD?tab=repositories">
                    see more &rarr;
                </Link>
            </div>
        </>
    );
}
