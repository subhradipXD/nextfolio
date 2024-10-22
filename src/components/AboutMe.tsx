"use client";
import LetterPullup from "./ui/letter-pullup";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const words = `Hey there! I’m Subhradip, a successful code copier who spends more time Googling “how to fix my code” than actually coding. I juggle React, and Next.js, Tailwind CSS while pretending to be a tech genius. Check out my projects, or don’t—I’ll be here, sipping coffee and waiting for inspiration (or a snack).`;

export function AboutMe() {
    return (
        <>
            <LetterPullup words={"ABOUT ME"} delay={0.05} />
            <div className=" mx-40">
                <TextGenerateEffect words={words} />
            </div>
        </>
    );
}
