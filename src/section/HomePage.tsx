import { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DefaultVariant, StaggedParrent } from "@/App";

export default function HomePage() {
    const staggedParrent = useContext(StaggedParrent);
    const defaultTopVariant = useContext(DefaultVariant);

    const defaultVariant = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        transition: { duration: 0.4, ease: "easeInOut" },
    };

    return (
        // Hero sectcion
        <div
            className=" hero-section w-full max-w-[1200px] h-svh flex items-center pt-10
        "
        >
            <motion.div className="flex flex-col md:flex-row w-[85%] mx-auto items-center gap-16 md:gap-6">
                {/* Text */}
                <motion.div
                    variants={staggedParrent}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="hero-text flex flex-col gap-6"
                >
                    <motion.h1
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                        className="text-5xl font-bold"
                    >
                        Where Vision Meets{" "}
                        <span className="text-[#2e6a9e]">
                            Digital Perfection
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                        className="text-lg"
                    >
                        Professional websites and social media solutions
                        designed to grow your online presence and convert
                        visitors into customers.
                    </motion.p>
                    <motion.button
                        className="w-fit"
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                    >
                        <Button className="bg-[#2e6a9e] shadow-[#2e6a9e] shadow-lg hover:bg-[#2b3946] w-fit h-[2.5rem]">
                            Book Free Consultation
                        </Button>
                    </motion.button>
                </motion.div>

                {/* Image */}
                <motion.div
                    variants={staggedParrent}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="relative hero-img-container flex w-full"
                >
                    <motion.img
                        variants={defaultTopVariant}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        src="/img/heroImg2.png"
                        className=" w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                    />
                    <motion.img
                        variants={defaultTopVariant}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        src="/img/heroImg.png"
                        alt=""
                        className="absolute right-0 -top-10 w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
