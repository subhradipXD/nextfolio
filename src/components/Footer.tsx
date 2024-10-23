/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { Caesar_Dressing } from 'next/font/google';
const caesarDressing = Caesar_Dressing({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
const Footer: React.FC = () => {
    return (
        <footer className="flex justify-around items-center p-4 bg-transparent">
            <div className="flex space-x-4">
                <Link href="https://github.com/subhradipXD" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-110 hover:shadow-3d-light dark:hover:shadow-3d-dark">
                    <FaGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/subhradip-das-2000s69/" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-110 hover:shadow-3d-light dark:hover:shadow-3d-dark">
                    <FaLinkedin size={24} />
                </Link>
                <Link href="https://wa.me/9635760319" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-110 hover:shadow-3d-light dark:hover:shadow-3d-dark">
                    <FaWhatsapp size={24} />
                </Link>
                <Link href="mailto:subhradipdas6969@gmail.com" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-110 hover:shadow-3d-light dark:hover:shadow-3d-dark">
                    <FaRegEnvelope size={24} />
                </Link>
            </div>

            <div className="text-center text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-110 hover:shadow-3d-light dark:hover:shadow-3d-dark">
                <p className={`text-sm ${caesarDressing.className}`}>
                    made with <span className="text-red-700">&hearts;</span> thank you!
                </p>
            </div>
        </footer>
    );
};

export default Footer;
