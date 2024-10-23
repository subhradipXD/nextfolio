"use client";
import Typewriter from "typewriter-effect";
import './Preloader.css';
import { Caesar_Dressing } from 'next/font/google';

const caesarDressing = Caesar_Dressing({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export function PreLoader() {
    return (
        <div className={`flex items-center justify-center h-screen w-screen bg-black loading-page p-4 ${caesarDressing.className}`}>
            <div className="text-center space-y-6 animate-pulse max-w-md mx-auto">
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-24 w-24 text-red-700 animate-spin-slow mb-5"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#b91c1c"
                        d="M404.9 331c2.2-1.1 4.4-2.3 6.5-3.7l8.3-4.8c1.5-1.1 4.4-3.4 8.7-6.7l.5-.5c3.4-3.4 7.2-5 11.3-4.9c1.8 0 3.9 .5 6.4 1.5l31-27.5c.9-.7 1.7-1.3 2.6-1.8h.2c3.3-1.9 6-1.8 8.2 .4c3.9 2.1 4.2 5.6 .9 10.6L456.9 322c.2 .5 .4 1 .4 1.5c.5 2.2 .3 4.4-.5 6.6c-.7 1.5-1.8 2.9-3.1 4.2c-1.4 1.4-2.7 2.8-4.2 4.2l-18.8 13.7c-1.7 1.2-3.4 2.3-5.1 3.3c-2.1 1.3-4.3 2.5-6.6 3.6c-1 .4-1.9 .9-2.9 1.3c-5.9 2.5-11.9 4.2-18.2 5c-2.9 24.5-11.3 47.1-25.1 67.8c-17.5 25.7-41.4 45.4-71.8 58.8c-30.2 13.5-63 20.2-98.2 20.2c-48.6-.5-88-11.4-118.2-32.8C49.5 454.4 32 421.5 32 380.3v-5.6c1.2-28.1 9.5-54.6 24.8-79.8c15.1-24.9 37.1-41.7 66.1-50.5c14.9-4.4 29.9-6.6 45-6.6c15.5 0 31.6 2.9 48.1 8.6s35.2 15.5 55.9 29.5L326 312.2c15.1 9.8 28.8 16.5 41.2 20c-2.6-25.1-11.7-46.6-27.3-64.5c-15.7-18.1-35.6-31.3-59.9-39.7l-23.3-8c-21.4-7.5-37.3-14.9-47.7-22.2c-28.2-19.1-43.8-45.2-47-78.5l-.5-9.8c0-32.1 13-58.9 39-80.5C223.5 9.7 251.1 0 283 0c24 0 45.6 6.9 64.7 20.8c19.2 14 30.1 33.8 32.6 59.4l.5 10c0 18.6-4.8 34.5-14.4 47.7c-9.8 13.2-18.5 19.9-26 19.9c-1.6-.1-3.1-.3-4.5-.6l-34 32c-5.5 3-9.2 2.5-11.1-1.6c-1.9-2.2-1.8-4.9 .5-8.2l.2-.2c.5-.7 1.2-1.5 2-2.4l31.6-30c-.4-1.5-.6-3.1-.6-4.8c0-4.1 1.6-7.6 4.9-10.4c13.8-12.4 20.8-26.7 20.8-42.8c0-16-6.1-29.5-18.2-40.4s-28.7-16.5-49.7-16.8c-26.2 0-47.8 7.9-64.7 23.7S192.3 89.9 192.3 112c0 17.8 6.9 33.9 20.6 48.3c13.6 14.2 34.6 25.4 63 33.5c39.8 11.5 70.2 31 91.3 58.3c18.7 24.2 29.1 51.3 31.3 81.4c2.2-.7 4.3-1.5 6.5-2.6z"
                    />
                </svg>
                <span className="text-xl sm:text-2xl text-red-700 tracking-wide mt-3" >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to the Realm of Creativity!")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Prepare to be Amazed...")
                                .start();
                        }}
                        options={{
                            loop: false,
                            cursor: "|",
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </span>
            </div>
        </div>
    );
}
