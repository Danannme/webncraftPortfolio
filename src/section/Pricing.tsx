import { useState } from "react";
import { Check, ChevronRight, Shield } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
    return (
        <div className="bg-white mb-20 md:mb-40">
            <div className="max-w-7xl mx-auto">
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
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                    {/* Starter Plan */}
                    <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900">
                                Basic Website
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                For individuals and small teams just getting
                                started
                            </CardDescription>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">
                                    $250-$500
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="border-t border-gray-200 pt-6">
                            <ul className="space-y-4">
                                {[
                                    "5 team members",
                                    "10 projects",
                                    "20GB storage",
                                    "Basic analytics",
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
                    <Card className="border-gray-200 shadow-sm relative">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900">
                                Social Media Marketing
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                For growing teams scaling their business
                            </CardDescription>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">
                                    $100-$300
                                </span>
                                <span className="text-gray-600">/month</span>
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

                    {/* Enterprise Plan */}
                    <Card className="border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900">
                                Maintenance Retainer
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                For large organizations with advanced needs
                            </CardDescription>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">
                                    $50
                                </span>
                                <span className="text-gray-600">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="border-t border-gray-200 pt-6">
                            <ul className="space-y-4">
                                {[
                                    "Unlimited team members",
                                    "Unlimited projects",
                                    "Unlimited storage",
                                    "Custom analytics",
                                    "24/7 priority support",
                                    "Advanced security",
                                    "API access",
                                    "Dedicated account manager",
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
                </div>
            </div>
        </div>
    );
}
