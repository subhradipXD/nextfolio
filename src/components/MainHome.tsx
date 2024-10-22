import { IconCloudDemo } from "./IconCloudDemo";
import BoxReveal from "./ui/box-reveal";

function MainHome() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 p-5 md:p-10 lg:ml-20 lg:mr-5 flex flex-col justify-center">
                <div className="max-w-lg mx-auto">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="text-[2rem] md:text-[3rem] font-semibold">Welcome to My</p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="text-[2rem] md:text-[3rem] font-semibold">
                            World<span className="text-[#5046e6]">.</span>
                        </p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <h2 className="mt-2 text-[0.875rem] md:text-[1rem]">
                            Congratulations! You’ve found your way to my{" "}
                            <span className="text-[#5046e6]">World</span>, the place where I
                            pretend to know what I’m doing.
                        </h2>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <h2 className="mt-2 text-[0.875rem] md:text-[1rem]">
                            I hope you enjoy the result of countless hours of Googling,
                            caffeine-fueled coding marathons, and a few “What was I thinking?”
                            moments.
                        </h2>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <h2 className="mt-2 text-[0.875rem] md:text-[1rem]">
                            Don’t worry; I won’t judge you for being here—after all, I’m the one
                            who put this together! Dive in and witness my{" "}
                            <span className="text-[#5046e6]">journey</span> from
                            <span className="text-[#5046e6]"> clueless</span> to… well, slightly
                            less clueless. 😅
                        </h2>
                    </BoxReveal>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-5 md:p-10 flex justify-center items-center lg:ml-5 lg:mr-20">
                <div className="w-full max-w-md">
                    <IconCloudDemo />
                </div>
            </div>
        </div>
    );
}

export default MainHome;
