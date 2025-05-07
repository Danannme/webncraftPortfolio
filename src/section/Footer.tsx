import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

const appearBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function Footer() {
    return (
        <motion.footer
            variants={appearBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gray-50 pt-8 pb-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="/img/logo.png"
                                alt=""
                                className="w-[10rem]"
                            />
                        </div>
                        <p className="text-gray-600">
                            A creative digital services company specializing in
                            Social Media Marketing (SMM) and Website
                            Development.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                target="_blank"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/WeAreWebNCraft"
                                target="_blank"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <FaXTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#aboutus"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contactus"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Our Services
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    SEO Optimization
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Social Media Marketing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Content Creation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Digital Strategy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Contact Us
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Phone
                                    size={18}
                                    className="text-[#2e6a9e] flex-shrink-0"
                                />
                                <span className="text-gray-600">
                                    +971 (50) 419 6249
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail
                                    size={18}
                                    className="text-[#2e6a9e] flex-shrink-0"
                                />
                                <span className="text-gray-600">
                                    TheWebNCraftTeam@gmail.com
                                </span>
                            </li>
                            <li className="mt-4">
                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        Working Hours:
                                    </span>
                                    <br />
                                    Monday-Friday: 9am-5pm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-gray-200" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} WebArCraft. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
