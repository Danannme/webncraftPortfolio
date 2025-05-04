import { useState } from "react";
import { motion, scale, useScroll, useTransform } from "motion/react";
import HomePage from "./section/HomePage";
import AboutUs from "./section/AboutUs";
import Services from "./section/Services";
import Portfolio from "./section/Portfolio";
import PricingSection from "./section/Pricing";
import ContactUs from "./section/ContactUs";
import Footer from "./section/Footer";

import { Button } from "./components/ui/button";
import { BsListNested } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const html = document.getElementById("html");
    if (isOpen) {
        html.style.overflowY = "hidden";
    } else {
        html.style.overflowY = "visible";
    }

    const shadowNav = useTransform(
        scrollY,
        [0, 100],
        [
            "rgba(0, 0, 0, 0) 0px 20px 25px -5px, rgba(0, 0, 0, 0) 0px 10px 10px -5px;",
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
        ]
    );

    return (
        <div
            className={`flex flex-col items-center ${
                isOpen ? "overflow-y-hidden" : "overflow-y-visible"
            }`}
        >
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                    boxShadow: shadowNav,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="navbar w-full flex items-center px-10 md:px-16 py-6 z-10 fixed bg-white"
            >
                <motion.div className="navbar-logo">
                    <img src="img/logo.png" className="w-[4rem]" />
                </motion.div>
                <motion.ul className="hidden md:flex gap-10 ml-16">
                    <motion.a
                        href="#"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#aboutus"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        About Us
                    </motion.a>
                    <motion.a
                        href="#services"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Services
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Portfolio
                    </motion.a>
                    <motion.a
                        href="#pricing"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Pricing
                    </motion.a>
                    <motion.a
                        href="#contactus"
                        className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Contact Us
                    </motion.a>
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
            </motion.nav>

            {/* Mobile Navbar */}
            <motion.nav
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
                    <motion.a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#aboutus"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        About Us
                    </motion.a>
                    <motion.a
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Services
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Portfolio
                    </motion.a>
                    <motion.a
                        href="#pricing"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Pricing
                    </motion.a>
                    <motion.a
                        href="#contactus"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                    >
                        Contact Us
                    </motion.a>
                </motion.ul>
            </motion.nav>
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
            <Footer />
        </div>
    );
}
