import { motion } from "motion/react";

export default function AboutUs() {
    return (
        <motion.div className="flex flex-col items-center md:flex-row md:justify-center w-[85%] md:w-[70%] max-w-[1200px] gap-10 md:gap-50 mb-20 md:mb-40">
            <motion.div>
                {/* Image */}
                <img
                    src="/img/aboutusImg.png"
                    className="w-full md:w-[100rem] drop-shadow-2xl drop-shadow-gray-300"
                    alt=""
                />
            </motion.div>

            {/* Text */}
            <motion.div className="grid gap-4">
                <motion.h1 className="text-3xl font-bold">
                    Our <span className="text-[#2e6a9e]">Agency</span>
                </motion.h1>
                <motion.p>
                    WebNCraft is a freelance digital services company
                    specializing in Social Media Marketing (SMM) and Website
                    Development. We aim to help small businesses, startups, and
                    professionals establish a strong digital presence through
                    visually appealing, high-performing websites and engaging,
                    strategic Social Media campaigns.
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
