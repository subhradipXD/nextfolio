"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "./ui/label";
import Input from "./ui/input";
import { cn } from "@/lib/utils";
import { CoverDemo } from "./CoverDemo";
import Footer from "./Footer";
import BlurIn from "./ui/blur-in";
import emailjs from "emailjs-com";

type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
};

export function ContactMe() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setIsSubmitting(true);
        setFeedbackMessage("");

        emailjs.send("service_x643res", "template_xn7wykm", data, "4LIr4oqHpZ2uDDJ7A")
            .then(() => {
                setFeedbackMessage("Message sent successfully!");
                reset();
            })
            .catch(() => {
                setFeedbackMessage("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);

                // Automatically remove feedback message after 5 seconds
                setTimeout(() => {
                    setFeedbackMessage("");
                }, 5000);
            });
    };

    return (
        <>
            <BlurIn word="Contact" className="text-xl text-black dark:text-white" />
            <div className="max-w-md w-9/12 md:w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-5 backdrop-blur-md border-white dark:border-zinc-800 border-opacity-30">
                <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Tyler"
                                type="text"
                                {...register("firstname", { required: "First name is required" })}
                            />
                            {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Durden"
                                type="text"
                                {...register("lastname", { required: "Last name is required" })}
                            />
                            {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="projectmayhem@fc.com"
                            type="email"
                            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Feedback</Label>
                        <Input
                            isTextarea={true}
                            id="message"
                            placeholder="Write your feedback here"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    </LabelInputContainer>
                    <button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        <CoverDemo />
                    </button>
                </form>
            </div>

            {feedbackMessage && (
                <div className="fixed bottom-5 right-5 p-4 bg-white dark:bg-black shadow-lg rounded-lg border border-gray-300 dark:border-zinc-800 transition-opacity duration-300">
                    {feedbackMessage}
                </div>
            )}

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
