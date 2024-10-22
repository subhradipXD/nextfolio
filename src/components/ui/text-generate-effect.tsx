/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const ref = useRef<HTMLDivElement>(null); // Create a ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Check if the component is in view
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(
            "span",
            {
              opacity: 1,
              filter: filter ? "blur(0px)" : "none",
            },
            {
              duration: duration,
              delay: stagger(0.2),
            }
          );
          observer.unobserve(entry.target); // Stop observing once it has animated
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on unmount
      }
      observer.disconnect(); // Cleanup the observer
    };
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn(className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl md:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
