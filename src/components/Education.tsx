import { FadeCard } from "@/components/ui/fade-card";
import BlurIn from "./ui/blur-in";

const educationData = [
    {
        title: "2017",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Vivekananda Mission Asram Sikshayatan, Purba Medinipur
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    West Bengal Board of Secondary Education
                </p>
            </div>
        ),
    },
    {
        title: "2017 – 2019",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Haldia Govt. Spon. Vivekananda Vidyabhaban, Purba Medinipur
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    West Bengal Council of Higher Secondary Education
                </p>
            </div>
        ),
    },
    {
        title: "2019 – 2022",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Mahishadal Raj College, Purba Medinipur – Vidyasagar University
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Bachelor of Computer Science
                </p>
            </div>
        ),
    },
    {
        title: "2022 – 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Heritage Institute of Technology, Kolkata – MAKAUT
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-3">
                    Master of Computer Application
                </p>
            </div>
        ),
    },
];

export function Education() {
    return (
        <div className="flex flex-col space-y-8 text-center px-4 md:px-0">
            <BlurIn
                word="Education"
                className="text-xl text-black dark:text-white"
            />
            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    {educationData.map((item, index) => (
                        <FadeCard
                            key={index}
                            className={`
                                p-4 mb-3 bg-transparent border rounded-xl 
                                text-black dark:text-white 
                                shadow-lg transition-transform 
                                transform hover:scale-105 
                                hover:shadow-[0_0_15px_5px_rgba(255,200,0,0.5)] 
                                dark:hover:shadow-[0_0_15px_5px_rgba(0,255,200,0.5)]
                            `}
                            direction={index % 2 === 0 ? "left" : "right"}
                            framerProps={{
                                show: { transition: { delay: index * 0.2 } },
                            }}
                        >
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            {item.content}
                        </FadeCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
