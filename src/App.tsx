import { useState, useEffect, createContext } from "react";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
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

const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#aboutus" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contactus" },
];

const navItemVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { bounce: 0 } },
};

export const StaggedParrent = createContext({
    hidden: {},
    visible: {},
});

export const DefaultVariant = createContext({
    hidden: {},
    visible: {},
});

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const html = document.getElementById("html");
        if (html) {
            html.style.overflowY = isOpen ? "hidden" : "visible";
        }
    }, [isOpen]);

    const shadowNav = useTransform(
        scrollY,
        [0, 100],
        [
            "rgba(0, 0, 0, 0) 0px 20px 25px -5px, rgba(0, 0, 0, 0) 0px 10px 10px -5px",
            "rgba(0, 0, 0, 0.1) 0px 10px 10px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
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
                variants={{
                    hidden: {
                        y: -100,
                        opacity: 0,
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            bounceStiffness: 0,
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
                style={{
                    boxShadow: shadowNav,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="navbar w-full flex items-center px-10 md:px-16 py-4 z-10 fixed top-0 bg-white"
            >
                <motion.a
                    variants={{
                        hidden: { y: -100 },
                        visible: { y: 0 },
                    }}
                    transition={{ bounce: 0 }}
                    href="#"
                    className="navbar-logo"
                >
                    <img
                        src="img/logo.png"
                        className="w-[4rem] cursor-pointer"
                    />
                </motion.a>
                <motion.ul className="hidden md:flex gap-10 ml-16">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            variants={navItemVariants}
                            href={item.href}
                            className="text-base font-semibold hover:text-[#2e6a9e] hover:cursor-pointer"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </motion.ul>
                <motion.button
                    variants={navItemVariants}
                    className="hidden md:block ml-auto"
                >
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
                variants={{ hidden: { right: "-100%" }, visible: { right: 0 } }}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`md:hidden fixed top-0 w-[75%] h-dvh bg-white z-10`}
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className={`fixed top-0 left-0 md:hidden w-full h-dvh bg-[#00000096] z-5`}
                    ></motion.div>
                )}
            </AnimatePresence>

            <StaggedParrent.Provider
                value={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.4,
                            bounceStiffness: 0,
                        },
                    },
                }}
            >
                <DefaultVariant.Provider
                    value={{
                        hidden: { y: -100, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                        },
                    }}
                >
                    <HomePage />
                    <AboutUs />
                    <Services />
                    <Portfolio />
                    <PricingSection />
                    <ContactUs />
                    <Footer />
                </DefaultVariant.Provider>
            </StaggedParrent.Provider>
        </div>
    );
}
