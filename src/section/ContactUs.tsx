import { useContext } from "react";
import { motion } from "framer-motion";
import { DefaultVariant, StaggedParrent } from "@/App";
import MyForm from "@/components/Form";

export default function ContactUs() {
    const staggedParrent = useContext(StaggedParrent);
    const defaultTopApeear = useContext(DefaultVariant);

    return (
        <motion.section
            variants={staggedParrent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            id="contactus"
            className="w-[90%] mb-20 md:mb-40 scroll-mt-30"
        >
            <div className="container">
                {/* Text */}
                <motion.div
                    variants={defaultTopApeear}
                    transition={{ duration: 0.4, bounce: 0 }}
                    className="mb-6 text-center"
                >
                    <span className="text-sm font-semibold">Reach Us</span>
                    <h1 className="mt-1 mb-3 text-3xl font-bold text-balance">
                        Get In <span className="text-[#2e6a9e]">Touch</span>
                    </h1>
                </motion.div>

                {/* Card container */}
                <motion.div
                    variants={defaultTopApeear}
                    transition={{ duration: 0.4, bounce: 0 }}
                    className=""
                >
                    <MyForm />
                </motion.div>
            </div>
        </motion.section>
    );
}
