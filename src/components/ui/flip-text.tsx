/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function SlightFlip({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex justify-center space-x-2">
      <AnimatePresence mode="wait">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
