"use client";
import { motion } from "motion/react";
import { PinContainer } from "../components/ui/3d-pin";

export default function Portfolio() {
    return (
        <div
            id="portfolio"
            className="w-full max-w-[1200px] grid gap-6 place-items-center mb-20 md:mb-40 scroll-mt-20 md:scroll-mt-30"
        >
            {/* Title */}
            <motion.h1 className="text-3xl font-bold">
                Our <span className="text-[#2e6a9e]">Project</span>
            </motion.h1>

            {/* Portfolio container */}
            <motion.div className="w-full flex flex-wrap justify-center gap-8 md:gap-0 md:gap-y-6 z-0">
                <PinContainer title="the link" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                            Porject Title
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Project Description
                            </span>
                        </div>
                        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                        <img
                            src="/img/logo.png"
                            className="w-full my-auto"
                            alt=""
                        />
                    </div>
                </PinContainer>
                <PinContainer title="the link" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                            Porject Title
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Project Description
                            </span>
                        </div>
                        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                        <img
                            src="/img/logo.png"
                            className="w-full my-auto"
                            alt=""
                        />
                    </div>
                </PinContainer>
                <PinContainer title="the link" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                            Porject Title
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Project Description
                            </span>
                        </div>
                        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                        <img
                            src="/img/logo.png"
                            className="w-full my-auto"
                            alt=""
                        />
                    </div>
                </PinContainer>
            </motion.div>
        </div>
    );
}
