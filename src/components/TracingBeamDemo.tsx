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
        <TracingBeam >
            <section id="home">
                <MainHome />

            </section>
            <section id="about">
                <AboutMe />

            </section>
            <section id="works">
                <MyWorks />

            </section>
            <section id="education">
                <Education />

            </section>
            <section id="skills">
                <Skills />

            </section>
            <section id="contact">
                <ContactMe />

            </section>
        </TracingBeam>
    );
}


