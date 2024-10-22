import BoxReveal from "@/components/ui/box-reveal";

export function HomeLeftSide() {
    return (
        <div className="size-full max-w-lg items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">Welcome to My</p>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                    World<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                    Congratulations! You’ve found your way to my{" "}
                    <span className="text-[#5046e6]">World</span>, the place where I
                    pretend to know what I’m doing.
                </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                    I hope you enjoy the result of countless hours of Googling,
                    caffeine-fueled coding marathons, and a few “What was I thinking?”
                    moments.
                </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                    Don’t worry; I won’t judge you for being here—after all, I’m the one
                    who put this together! Dive in and witness my{" "}
                    <span className="text-[#5046e6]">journey</span> from
                    <span className="text-[#5046e6]"> clueless</span> to… well, slightly
                    less clueless. 😅
                </h2>
            </BoxReveal>
        </div>
    );
}
