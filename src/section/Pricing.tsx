import { Check } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PricingSection() {
    return (
        <div
            id="pricing"
            className="bg-white mb-20 md:mb-40 scroll-mt-22 md:scroll-mt-25"
        >
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Pricing
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that's right for you and your business.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col items-center">
                    <Tabs
                        defaultValue="web development"
                        className="w-full grid place-items-center"
                    >
                        {/* Tabs option */}
                        <TabsList>
                            <TabsTrigger value="web development">
                                Web Development
                            </TabsTrigger>
                            <TabsTrigger value="social media marketing">
                                Social Media Marketing
                            </TabsTrigger>
                        </TabsList>

                        {/* Web Dev Tabs container */}
                        <TabsContent
                            value="web development"
                            className="w-full flex flex-wrap justify-center gap-4"
                        >
                            {/* Starter Plan*/}
                            <Card className="w-[20rem] border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Starter
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Need a simple website fast? This is your
                                        quick and clean solution to go online.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $250
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "1-3 Page Website",
                                            "Mobile Rsponsive Design",
                                            "Contact Form",
                                            "30 Days Support after Launch",
                                        ].map((feature) => (
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

                            {/* Professional Plan */}
                            <Card className="w-[20rem] border-gray-200 shadow-sm relative">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Professional
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Want a solid online presence? This
                                        package gives you a great website plus
                                        social media support.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $400
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "15 team members",
                                            "Unlimited projects",
                                            "100GB storage",
                                            "Advanced analytics",
                                            "Priority support",
                                            "Custom domains",
                                        ].map((feature) => (
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

                            {/* Elite Plan */}
                            <Card className="w-[20rem] border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Maintenance Retainer
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Looking for the full package? Get a
                                        custom, powerful website with all the
                                        extras and long-term support.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $500+
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "Unlimited Pages",
                                            "Custom Features (Booking, Dashboard, etc)",
                                            "Branding Kit (Logo, Fonts, Colors)",
                                            "90 Days Support & Maintenance",
                                        ].map((feature) => (
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
                        </TabsContent>

                        {/* Marketing Tabs container */}
                        <TabsContent
                            value="social media marketing"
                            className="w-full flex flex-wrap justify-center gap-4"
                        >
                            {/* Basic Plan */}
                            <Card className="w-[20rem] border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Basic Plan
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Just getting started? This plan keeps
                                        your page active and professional with a
                                        few quality posts each month.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $55
                                        </span>
                                        <span className="text-gray-600">
                                            /month
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "3 Branded Posts/month",
                                            "Basic Captions & Hashtags",
                                            "1 Platformt (Facebook or Instagram)",
                                            "Monthly Performance Report",
                                        ].map((feature) => (
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

                            {/* Growth Plan */}
                            <Card className="w-[20rem] border-gray-200 shadow-sm relative">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Growth Plan
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Ready to grow? Get more posts, better
                                        content, and boost your presence on both
                                        Facebook and Instagram.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $110
                                        </span>
                                        <span className="text-gray-600">
                                            /month
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "10 Branded Posts/month",
                                            "Creative Copywriting",
                                            "2 Platforms (Facebook & Instagram)",
                                            "Monthly Performance Report",
                                            "Basic Engagement (Reply to Comments)",
                                        ].map((feature) => (
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

                            {/* Pro Plan */}
                            <Card className="w-[20rem] border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        Pro Plan
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Want to stand out? Go all-in with full
                                        content strategy, videos, 3 platforms,
                                        and community engagement.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            $180
                                        </span>
                                        <span className="text-gray-600">
                                            /month
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="border-t border-gray-200 pt-6">
                                    <ul className="space-y-4">
                                        {[
                                            "20+ Custom Posts/month",
                                            "3 Platforms (Facebook, Instagram, & TikTok)",
                                            "Content Calendar & Strategy",
                                            "Reel/Shorts Concepts,",
                                            "Engagement & Community Management",
                                            "Boosting/Ad. Budget Guidance",
                                        ].map((feature) => (
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
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
