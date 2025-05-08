import { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function ImgSkeleton({
    src,
    styling,
    motionVariant,
}: {
    src: string;
    styling: string;
    motionVariant: {};
}) {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     async function imgEvent() {
    //         setIsLoading(false);
    //     }
    //     document.getElementById("image")?.addEventListener("load", imgEvent);
    //     return () => document.removeEventListener("load", imgEvent);
    // });

    function handleImgLoaded() {
        setIsLoading(false);
    }

    return (
        <>
            <motion.img
                variants={motionVariant}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                src={src}
                onLoad={handleImgLoaded}
                className={`${isLoading ? "hidden" : "block"} ${styling}`}
            />

            {isLoading && (
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                </div>
            )}
        </>
    );
}
