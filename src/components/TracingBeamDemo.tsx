"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { AboutMe } from './AboutMe';
import MainHome from "./MainHome";
import { ContactMe } from "./ContactMe";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { MyWorks } from "./MyWorks";

export function TracingBeamDemo() {
    return (
        <TracingBeam>
            <section id="home" className="ml-2 md:ml-0">
                <MainHome />
            </section>
            <section id="about" className="ml-2 md:ml-0">
                <AboutMe />
            </section>
            <section id="works" className="ml-2 md:ml-0">
                <MyWorks />
            </section>
            <section id="education" className="ml-2 md:ml-0">
                <Education />
            </section>
            <section id="skills" className="ml-2 md:ml-0">
                <Skills />
            </section>
            <section id="contact" className="ml-2 md:ml-0">
                <ContactMe />
            </section>
        </TracingBeam>
    );
}


