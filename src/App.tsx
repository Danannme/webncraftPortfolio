import { useState } from "react";
import { motion } from "motion/react";
import HomePage from "./section/HomePage";
import AboutUs from "./section/AboutUs";
import Services from "./section/Services";
import Portfolio from "./section/Portfolio";
import PricingSection from "./section/Pricing";
import ContactUs from "./section/ContactUs";

import { Button } from "./components/ui/button";
import { BsListNested } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const html = document.getElementById("html");
    if (isOpen) {
        html.style.overflowY = "hidden";
    } else {
        html.style.overflowY = "visible";
    }

    return (
        <div
            className={`flex flex-col items-center ${
                isOpen ? "overflow-y-hidden" : "overflow-y-visible"
            }`}
        >
            {/* Navbar */}
            <motion.div className="navbar w-full flex items-center px-10 md:px-16 py-6 z-10 fixed top-0 bg-white">
                <motion.div className="navbar-logo">
                    <img src="img/logo.png" className="w-[4rem]" />
                </motion.div>
                <motion.ul className="hidden md:flex gap-10 ml-16">
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        Home
                    </motion.li>
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        About Us
                    </motion.li>
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        Services
                    </motion.li>
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        Portfolio
                    </motion.li>
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        Pricing
                    </motion.li>
                    <motion.li className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer">
                        Contact Us
                    </motion.li>
                </motion.ul>
                <motion.button className="hidden md:block ml-auto">
                    <Button className="bg-[#2e6a9e] shadow-[#2e6a9e] shadow-lg hover:bg-[#2b3946]">
                        Let's Connect
                    </Button>
                </motion.button>
                <motion.span
                    className="ml-auto md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <Button variant="outline">
                        <BsListNested size={30} />
                    </Button>
                </motion.span>
            </motion.div>

            {/* Mobile Navbar */}
            <motion.div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden fixed top-0 right-0 w-[75%] h-dvh bg-white z-10`}
            >
                <motion.p className="w-full px-8 py-6">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                    >
                        <RxCross1 size={30} className="cursor-pointer" />
                    </Button>
                </motion.p>
                <motion.ul className="grid gap-5 px-8">
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Home
                    </motion.li>
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        About Us
                    </motion.li>
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Services
                    </motion.li>
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Portfolio
                    </motion.li>
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Pricing
                    </motion.li>
                    <motion.li
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Contact Us
                    </motion.li>
                </motion.ul>
            </motion.div>
            {/* Black bakcgroun when navbar open in mobile */}
            <motion.div
                onClick={() => setIsOpen(false)}
                className={`fixed top-0 left-0 ${
                    isOpen ? "block" : "hidden"
                } md:hidden w-full h-dvh bg-[#00000096] z-5`}
            ></motion.div>

            <HomePage />
            <AboutUs />
            <Services />
            <Portfolio />
            <PricingSection />
            <ContactUs />
        </div>
    );
}
