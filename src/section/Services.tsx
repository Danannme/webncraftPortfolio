import { motion } from "motion/react";

export default function AboutUs() {
    return (
        // About Us section
        <div className="flex flex-col items-center w-[85%] max-w-[1200px]">
            <motion.h1 className="text-3xl font-bold text-center">
                We Provide The Best{" "}
                <span className="text-[#2e6a9e]">Services</span>
            </motion.h1>
            <motion.p className="text-center">
                Let us unleash the full potential of your business with our
                data-driven strategies
            </motion.p>
        </div>
    );
}
