// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// // import Link from "next/link";
// import img from "@/public/1708594263137.jpg";
// export function HomeRightSide() {
//     return (
//         <CardContainer className="inter-var">
//             <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-1/2 sm:w-[30rem]  rounded-full p-6 border  ">
//                 {/* <CardItem
//                     translateZ="50"
//                     className="text-xl font-bold text-neutral-600 dark:text-white"
//                 >
//                     Make things float in air
//                 </CardItem> */}
//                 {/* <CardItem
//                     as="p"
//                     translateZ="60"
//                     className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                 >
//                     Hover over this card to unleash the power of CSS perspective
//                 </CardItem> */}
//                 <CardItem translateZ="100" className="w-full mt-4">
//                     <Image
//                         src={img}
//                         height="1000"
//                         width="1000"
//                         className="w-1/2 object-cover rounded-full group-hover/card:shadow-xl"
//                         alt="thumbnail"
//                     />
//                 </CardItem>
//                 <div className="flex justify-between items-center mt-20">
//                     {/* <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href="https://twitter.com/mannupaaji"
//                         target="__blank"
//                         className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                     >
//                         Try now →
//                     </CardItem> */}
//                     {/* <CardItem
//                         translateZ={20}
//                         as="button"
//                         className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                     >
//                         Sign up
//                     </CardItem> */}
//                 </div>
//             </CardBody>
//         </CardContainer>
//     );
// }


"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import img from "@/public/1708594263137.jpg";


export function HomeRightSide() {
    return (
        <>
            <CardContainer className="inter-var">
                <CardBody className="bg-transparent border-black/[0.1] dark:border-white/[0.2] w-full sm:w-[30rem] rounded-3xl p-8 transition-all duration-300 ease-in-out ">
                    <CardItem translateZ="100" className="w-full flex justify-center">
                        <Image
                            src={img}
                            height="1000"
                            width="1000"
                            className="w-48 sm:w-60 md:w-72 object-cover rounded-full group-hover/card:shadow-xl transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/[0.1]"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </>
    );
}
