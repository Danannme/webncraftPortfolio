import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
    return (
        <section id="contactus" className="w-[90%] mb-20 md:mb-40 scroll-mt-30">
            <div className="container">
                {/* Text */}
                <div className="mb-6">
                    <span className="text-sm font-semibold">Reach Us</span>
                    <h1 className="mt-1 mb-3 text-3xl font-bold text-balance">
                        Speak with Our{" "}
                        <span className="text-[#2e6a9e]">Friendly Team</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We&apos;d love to assist you.
                    </p>
                </div>

                {/* Card container */}
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                            <Mail className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Email Us</p>
                        <p className="mb-3 text-muted-foreground">
                            Our team is ready to assist.
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            abc@example.com
                        </a>
                    </div>
                    <div>
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                            <FaWhatsapp className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Live Chat</p>
                        <p className="mb-3 text-muted-foreground">
                            Get fast message reply
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            +5555555555
                        </a>
                    </div>
                    <div>
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                            <Phone className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold"> Call Us</p>
                        <p className="mb-3 text-muted-foreground">
                            We&apos;re available Mon-Fri, 9am-5pm.
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            +123 456 7890
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
