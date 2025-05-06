import { useContext } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { DefaultVariant, StaggedParrent } from "@/App";

const packages = [
    {
        title: "Starter",
        desc: "Perfect for small businesses or personal brands taking their first step online. Clean, responsive design with essential features to establish your digital presence.",
        price: "$250",
        benefit: [
            "1-3 Page Website",
            "Mobile Rsponsive Design",
            "Contact Form",
            "30 Days Support after Launch",
        ],
    },
    {
        title: "Professional",
        desc: "Ideal for growing businesses and freelancers ready to level up. Includes advanced sections, modern interface, and optimized experience tailored to your goals.",
        price: "$400",
        benefit: [
            "15 team members",
            "Unlimited projects",
            "100GB storage",
            "Advanced analytics",
            "Priority support",
            "Custom domains",
        ],
    },
    {
        title: "Starter",
        desc: "Fully tailored website solution for large-scale needs or specific visions. From branding to deployment, we build everything to your exact requirements.",
        price: "$500+",
        benefit: [
            "Unlimited Pages",
            "Custom Features (Booking, Dashboard, etc)",
            "Branding Kit (Logo, Fonts, Colors)",
            "90 Days Support & Maintenance",
        ],
    },
];

export default function PricingSection() {
    const staggedParrent = useContext(StaggedParrent);
    const defaultTopApeear = useContext(DefaultVariant);

    return (
        <div
            id="pricing"
            className=" bg-white mb-20 md:mb-40 scroll-mt-22 md:scroll-mt-25"
        >
            <motion.div
                variants={staggedParrent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-6">
                    <motion.h2
                        variants={defaultTopApeear}
                        transition={{ duration: 0.3, bounce: 0 }}
                        className="text-3xl font-bold text-gray-900 sm:text-4xl"
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        variants={defaultTopApeear}
                        transition={{ duration: 0.3, bounce: 0 }}
                        className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Choose the plan that's right for you and your business.
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {/* Web Dev Tabs container */}
                    {packages.map((item) => {
                        return (
                            <motion.div
                                variants={defaultTopApeear}
                                transition={{ duration: 0.3, bounce: 0 }}
                            >
                                <Card className="w-[20rem] h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-semibold text-gray-900">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">
                                            {item.desc}
                                        </CardDescription>
                                        <div className="mt-4">
                                            <span className="text-4xl font-bold text-gray-900">
                                                {item.price}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="border-t border-gray-200 pt-6">
                                        <ul className="space-y-4">
                                            {item.benefit.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start"
                                                >
                                                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mr-2" />
                                                    <span className="text-gray-600">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
