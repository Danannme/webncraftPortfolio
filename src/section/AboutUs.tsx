import { useContext } from "react";
import { motion } from "framer-motion";
import { StaggedParrent } from "@/App";

const leftAppear = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

export default function AboutUs() {
    const staggedParrent = useContext(StaggedParrent);

    return (
        <motion.div
            variants={staggedParrent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="aboutus"
            className="flex flex-col items-center md:flex-row md:justify-center w-[85%] md:w-[70%] max-w-[1200px] gap-10 md:gap-50 mb-20 md:mb-40 scroll-mt-28 md:scroll-mt-45"
        >
            <motion.h1
                variants={leftAppear}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="block md:hidden text-3xl font-bold"
            >
                <span className="text-[#2e6a9e]">Who</span> We Are
            </motion.h1>

            {/* Image */}
            <div className="block text-3xl font-bold">
                <motion.img
                    variants={leftAppear}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        bounce: 0,
                    }}
                    src="/img/aboutusImg.png"
                    className="w-full md:w-[100rem] drop-shadow-2xl drop-shadow-gray-300"
                    alt=""
                />
            </div>

            {/* Text */}
            <motion.div className="grid gap-4">
                <motion.h1
                    variants={leftAppear}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        bounce: 0,
                    }}
                    className="hidden md:block text-3xl font-bold"
                >
                    <span className="text-[#2e6a9e]">Who</span> We Are
                </motion.h1>
                <motion.p
                    variants={leftAppear}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        bounce: 0,
                    }}
                >
                    At <span className="font-semibold">WebNCraft</span>, we are
                    a passionate team of Designers, Developers, and Strategists
                    dedicated to helping brands build their digital presence.
                    From custom Website Development to Social Media Marketing
                    (SMM), we craft tailored solutions that align with your
                    goals. We value collaboration, creativity, and
                    results—whether you are just starting out or ready to scale,
                    we are here to bring your vision to life.
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
