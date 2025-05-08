"use client";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    MultiSelector,
    MultiSelectorContent,
    MultiSelectorInput,
    MultiSelectorItem,
    MultiSelectorList,
    MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    mobileNumber: z.string(),
    orgName: z.string().min(1),
    "which best describes you?": z.array(z.string()),
    "what services are you interested in?": z
        .array(z.string())
        .nonempty("Please at least one item"),
});

export default function MyForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "which best describes you?": [],
            "what services are you interested in?": [],
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        try {
            await emailjs.send("service_plaqthp", "template_ff52fmc", values, {
                publicKey: "4_1_0Y7m_MY9vJIsy",
            });
            toast.success("message sent successfully");
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-3xl mx-auto py-10"
            >
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" type="text" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Google Address</FormLabel>
                            <FormControl>
                                <Input placeholder="" type="email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl className="w-full">
                                {/* <PhoneInput
                                        placeholder=""
                                        {...field}
                                        defaultCountry="TR"
                                    /> */}
                                <Input type="tel" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="orgName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Business/Organization Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" type="text" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="which best describes you?"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Which best describes you?</FormLabel>
                            <FormControl>
                                <MultiSelector
                                    values={field.value}
                                    onValuesChange={field.onChange}
                                    loop
                                    className="max-w-xs"
                                >
                                    <MultiSelectorTrigger>
                                        <MultiSelectorInput placeholder="Select the option" />
                                    </MultiSelectorTrigger>
                                    <MultiSelectorContent>
                                        <MultiSelectorList>
                                            <MultiSelectorItem value={"React"}>
                                                React
                                            </MultiSelectorItem>
                                            <MultiSelectorItem value={"Vue"}>
                                                Vue
                                            </MultiSelectorItem>
                                            <MultiSelectorItem value={"Svelte"}>
                                                Svelte
                                            </MultiSelectorItem>
                                        </MultiSelectorList>
                                    </MultiSelectorContent>
                                </MultiSelector>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="what services are you interested in?"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                What services are you interested in?
                            </FormLabel>
                            <FormControl>
                                <MultiSelector
                                    values={field.value}
                                    onValuesChange={field.onChange}
                                    loop
                                    className="max-w-xs"
                                >
                                    <MultiSelectorTrigger>
                                        <MultiSelectorInput placeholder="Select the option" />
                                    </MultiSelectorTrigger>
                                    <MultiSelectorContent>
                                        <MultiSelectorList>
                                            <MultiSelectorItem value={"React"}>
                                                React
                                            </MultiSelectorItem>
                                            <MultiSelectorItem value={"Vue"}>
                                                Vue
                                            </MultiSelectorItem>
                                            <MultiSelectorItem value={"Svelte"}>
                                                Svelte
                                            </MultiSelectorItem>
                                        </MultiSelectorList>
                                    </MultiSelectorContent>
                                </MultiSelector>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.formState.isSubmitting ? (
                    <Button disabled size="lg" className="bg-[#2e6a9e]">
                        <Loader2 className="animate-spin" />
                        Please wait
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        size="lg"
                        className="cursor-pointer bg-[#2e6a9e]"
                    >
                        Submit
                    </Button>
                )}
                <Toaster richColors position="top-center" />
            </form>
        </Form>
    );
}
