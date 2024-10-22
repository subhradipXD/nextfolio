"use client";
import React from "react";
import { Label } from "./ui/label";
import Input from "./ui/input";
import { cn } from "@/lib/utils";
import { CoverDemo } from "./CoverDemo";
import Footer from "./Footer";
import BlurIn from "./ui/blur-in";

export function ContactMe() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <>
            <BlurIn
                word="CONTACT ME"
                className="text-xl font-bold text-black dark:text-white"
            />
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-2 md:p-8 shadow-input border bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-5 backdrop-blur-md border-white dark:border-zinc-800 border-opacity-30">
                <form className="my-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Tyler" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Durden" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Feedback</Label>
                        <Input
                            isTextarea={true}
                            id="message"
                            placeholder="write your feedback here"
                        />
                    </LabelInputContainer>
                    <button type="submit" className="w-full">
                        <CoverDemo />
                    </button>
                </form>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <Footer />
        </>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
