import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 pt-8 pb-8">
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
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-[#2e6a9e] hover:text-blue-800 transition-colors"
                            >
                                <Linkedin size={20} />
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
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#2e6a9e] transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
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
                            <li className="flex items-start space-x-2">
                                <MapPin
                                    size={18}
                                    className="text-[#2e6a9e] mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-600">
                                    123 Business Street, City, Country
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone
                                    size={18}
                                    className="text-[#2e6a9e] flex-shrink-0"
                                />
                                <span className="text-gray-600">
                                    +123 456 7890
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail
                                    size={18}
                                    className="text-[#2e6a9e] flex-shrink-0"
                                />
                                <span className="text-gray-600">
                                    info@webarcraft.com
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
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-[#2e6a9e] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#2e6a9e] transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#2e6a9e] transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
