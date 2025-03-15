"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
    return (
        <WobbleCard containerClassName="min-h-[200px]">
            <Image
                src="/Me.jpg" // Corrected src path
                alt="Profile Image"
                width={300}  // Set an appropriate width
                height={300} // Set an appropriate height
                className="rounded-lg" // Optional: Add styling
            />
        </WobbleCard>
    );
}

