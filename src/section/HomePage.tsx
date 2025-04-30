import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Services() {
    return (
        // Hero sectcion
        <div className=" hero-section w-full max-w-[1200px] h-dvh flex items-center pt-10 z-0">
            <motion.div className="flex flex-col md:flex-row w-[85%] mx-auto items-center gap-16 md:gap-6">
                <div className="hero-text flex flex-col gap-6">
                    <h1 className="text-5xl font-bold">
                        We create{" "}
                        <span className="text-[#2e6a9e]">solutions</span> for
                        your business
                    </h1>
                    <p className="text-lg">
                        Our team keeps a keen eye on emerging trends and
                        technologies to ensure your marketing campaigns remain
                        cutting-edge.
                    </p>
                    <Button className="bg-[#2e6a9e] shadow-[#2e6a9e] shadow-lg hover:bg-[#2b3946] w-[8rem] h-[2.5rem]">
                        Get Started
                    </Button>
                </div>
                <div className="relative hero-img-container flex w-full">
                    <img
                        src="/img/heroImg2.png"
                        className=" w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                    />
                    <img
                        src="/img/heroImg.png"
                        alt=""
                        className="absolute right-0 -top-10 w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                    />
                </div>
            </motion.div>
        </div>
    );
}
