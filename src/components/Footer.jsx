'use client';

import Link from "next/link";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
    FaPaw,
    FaHeart,
    FaClock,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { MdPets } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="container mx-auto flex justify-center items-center mx-32">
            <footer className="bg-black pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 gap-10 mb-12">

                        <div className="mx-48">
                            <div className="flex items-center gap-2 mb-4">
                                <FaPaw className="text-pink-500 text-3xl" />
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                    PetNest
                                </h2>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Connecting loving homes with adorable pets. Adopt, don't shop — give a homeless animal a second chance at life.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/usama.bin.mahbub.2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                                >
                                    <FaFacebook className="text-gray-400 hover:text-white transition-colors" />
                                </a>
                               
                                <a
                                    href="https://www.linkedin.com/in/usama-bin-mahbub-918498284/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                                >
                                    <FaLinkedin className="text-gray-400 hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://github.com/usamabinmah12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                                >
                                    <FaGithub className="text-gray-400 hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <MdPets className="text-pink-500" />
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/pets" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2">
                                        <span>→</span> Browse All Pets
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <FaClock className="text-pink-500" />
                                Opening Hours
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="text-white">9:00 AM - 8:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="text-white">10:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="text-white">10:00 AM - 4:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <FaEnvelope className="text-pink-500" />
                                Contact Info
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-pink-500 mt-1 flex-shrink-0" />
                                    <span>123 Pet Sylhet, Animal District<br />Sylhet, SY 3101</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhone className="text-pink-500" />
                                    <a href="tel:+1234567890" className="hover:text-pink-500 transition-colors">
                                        +88 01838 669868
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-pink-500" />
                                    <a href="mailto:info@petnest.com" className="hover:text-pink-500 transition-colors">
                                       usamabinmahbub13@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm font-bold">
                                © {currentYear} PetNest. All rights reserved.
                            </p>

                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <span>Made with</span>
                                <FaHeart className="text-pink-500 animate-pulse" />
                                <span>for pets and their loving families</span>
                            </div>

                        </div>
                    </div>
                    </div>

                    
                </div>
            </footer>
        </div>

    );
};

export default Footer;