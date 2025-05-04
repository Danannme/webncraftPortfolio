import { motion } from "motion/react";

import { CgWebsite } from "react-icons/cg";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Services list
const cardList = [
    {
        icon: <CgWebsite size={30} />,
        iconBgColor: "#2e6a9e",
        title: "Web Development",
        desc: "We design and develop responsive, user-friendly websites tailored to your brand and business goals — from simple landing pages to full-featured web applications.",
    },
    {
        icon: <FaSearchengin size={30} />,
        iconBgColor: "#2e6a9e",
        title: "SEO",
        desc: "Boost your website’s visibility on search engines with our SEO strategies — including keyword research, on-page optimization, and technical SEO — to attract more organic traffic.",
    },
    {
        icon: <AiOutlineSound size={30} />,
        iconBgColor: "#2e6a9e",
        title: "Social Media Marketing",
        desc: "We help you grow your brand presence and engage your audience through strategic content creation, ad campaigns, and daily management on popular social media platforms.",
    },
];

export default function Services() {
    return (
        // About Us section
        <div
            id="services"
            className="flex flex-col items-center w-[85%] max-w-[1200px] gap-4 mb-20 md:mb-40 scroll-mt-25 md:scroll-mt-40"
        >
            <motion.h1 className="text-3xl font-bold text-center">
                We Provide The Best{" "}
                <span className="text-[#2e6a9e]">Services</span>
            </motion.h1>
            <motion.p className="text-center">
                Let us unleash the full potential of your business with our
                data-driven strategies
            </motion.p>
            <motion.div className="flex flex-col justify-center md:flex-row gap-4">
                {cardList.map((services) => {
                    return (
                        // Services item
                        <Card className="w-full max-w-[400px] pt-0 overflow-hidden">
                            <CardHeader
                                className={`w-[4rem] text-white p-4 bg-[${services.iconBgColor}] rounded-[84%_16%_100%_0%/0%_66%_34%_100%]`}
                            >
                                {services.icon}
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <CardTitle>{services.title}</CardTitle>
                                <CardDescription>
                                    {services.desc}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}
            </motion.div>
        </div>
    );
}
