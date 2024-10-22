"use client";
import { Navbar } from "@/components/Navbar";
import { PreLoader } from "@/components/PreLoader";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import RetroGrid from "@/components/ui/retro-grid";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <PreLoader />
      ) : (
        <>
          <div className={`fixed top-0 h-screen left-0 ${darkMode ? "bg-black" : "bg-white"} z-[-1]`}></div>
          <RetroGrid />
          <ThemeSwitcher />
          <TracingBeamDemo />
          <Navbar />
        </>
      )}
    </>
  );
}
