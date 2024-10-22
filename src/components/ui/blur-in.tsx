/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of view
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
    <motion.h1
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration }}
      variants={combinedVariants}
      ref={ref}
      className={cn(
        "font-display text-center text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
