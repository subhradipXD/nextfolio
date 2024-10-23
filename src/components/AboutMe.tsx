"use client";
import BlurIn from "./ui/blur-in";
import { TextGenerateEffect } from "./ui/text-generate-effect";

import { Fondamento, Caesar_Dressing } from 'next/font/google';
const caesarDressing = Caesar_Dressing({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const fondamento = Fondamento({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const words = `Hey there! I’m Subhradip, a successful code copier who spends more time Googling “how to fix my code” than actually coding. I juggle React, and Next.js, Tailwind CSS while pretending to be a tech genius. Check out my projects, or don’t—I’ll be here, sipping coffee and waiting for inspiration (or a snack).`;

export function AboutMe() {
    return (
        <>
            <BlurIn
                word="About"
                className={`text-xl text-black dark:text-white text-center ${caesarDressing.className}`}
            />
            <div className={`mx-5 md:mx-20 lg:mx-40 ${fondamento.className}`}>
                <TextGenerateEffect words={words} />
            </div>
        </>
    );
}
