import { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImgSkeleton from "@/components/ImgSkeleton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { DefaultVariant, StaggedParrent } from "@/App";

export default function HomePage() {
    const staggedParrent = useContext(StaggedParrent);
    const defaultTopVariant = useContext(DefaultVariant);

    const defaultVariant = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        transition: { duration: 0.4, ease: "easeInOut" },
    };

    return (
        // Hero sectcion
        <div className="relative hero-section w-full h-svh flex items-center pt-10">
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="1440"
                height="560"
                preserveAspectRatio="none"
                viewBox="0 0 1440 560"
                className="absolute [mask-image:radial-gradient(ellipse_150%_100%_at_50%_0%,#000_0%,transparent_100%)] -z-100"
            >
                <g mask='url("#SvgjsMask1019")' fill="none">
                    <path
                        d="M-66.64 360.3L-66.64 360.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-66.64 360.3L105.12 366.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-69.41 533.7L-69.41 533.7"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-69.41 533.7L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-69.41 533.7L40.85 641.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-69.41 533.7L-66.64 360.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M105.12 366.13L105.12 366.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M105.12 366.13L212.86 406.44"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M105.12 366.13L237.17 499.76"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M105.12 366.13L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M105.12 366.13L-69.41 533.7"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M51.3 548.33L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M51.3 548.33L40.85 641.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M40.85 641.34L40.85 641.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M40.85 641.34L252.32 652.51"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M40.85 641.34L237.17 499.76"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M40.85 641.34L105.12 366.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M40.85 641.34L212.86 406.44"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M212.86 406.44L212.86 406.44"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M212.86 406.44L237.17 499.76"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M212.86 406.44L402.1 396.03"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M212.86 406.44L400.39 498.77"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M212.86 406.44L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M237.17 499.76L237.17 499.76"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M237.17 499.76L252.32 652.51"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M237.17 499.76L400.39 498.77"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M237.17 499.76L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M237.17 499.76L402.1 396.03"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M252.32 652.51L252.32 652.51"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M252.32 652.51L380.56 652.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M252.32 652.51L400.39 498.77"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M252.32 652.51L51.3 548.33"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M252.32 652.51L212.86 406.44"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M402.1 396.03L402.1 396.03"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M402.1 396.03L400.39 498.77"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M402.1 396.03L498.26 343.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M402.1 396.03L514.52 557.64"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M400.39 498.77L400.39 498.77"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M400.39 498.77L514.52 557.64"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M400.39 498.77L380.56 652.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M400.39 498.77L498.26 343.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M380.56 652.32L380.56 652.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M498.26 343.57L498.26 343.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M514.52 557.64L514.52 557.64"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M514.52 557.64L555.38 647.41"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M514.52 557.64L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M514.52 557.64L380.56 652.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M555.38 647.41L555.38 647.41"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M555.38 647.41L689.35 663.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M555.38 647.41L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L696.52 240.65"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L807.27 214.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L689.09 373.61"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L804.14 407.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L498.26 343.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M696.52 240.65L975.97 189.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.09 373.61L689.09 373.61"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.09 373.61L804.14 407.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.09 373.61L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M673.94 523.52L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M673.94 523.52L689.35 663.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.35 663.32L689.35 663.32"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.35 663.32L823.47 704.48"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.35 663.32L514.52 557.64"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M689.35 663.32L858.46 542.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.27 214.21L807.27 214.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.27 214.21L975.97 189.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.27 214.21L957.34 103.36"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.27 214.21L804.14 407.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.27 214.21L689.09 373.61"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M804.14 407.34L804.14 407.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M804.14 407.34L858.46 542.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M804.14 407.34L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M858.46 542.13L858.46 542.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M858.46 542.13L997.72 501.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M823.47 704.48L823.47 704.48"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M823.47 704.48L858.46 542.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M823.47 704.48L989.03 676.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M823.47 704.48L673.94 523.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M823.47 704.48L997.72 501.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L963.84 -89.64"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L1094.48 -45"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L957.34 103.36"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L1158.57 85.79"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L975.97 189.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M963.84 -89.64L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M957.34 103.36L957.34 103.36"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M957.34 103.36L975.97 189.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M957.34 103.36L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M957.34 103.36L1158.57 85.79"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M957.34 103.36L1094.48 -45"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M975.97 189.57L975.97 189.57"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M975.97 189.57L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M975.97 189.57L982.55 361.82"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M975.97 189.57L1158.57 85.79"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M982.55 361.82L982.55 361.82"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M982.55 361.82L1122.21 367.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M982.55 361.82L997.72 501.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M982.55 361.82L804.14 407.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M982.55 361.82L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M997.72 501.52L997.72 501.52"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M997.72 501.52L1161.09 518.92"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M997.72 501.52L989.03 676.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M997.72 501.52L1122.21 367.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M997.72 501.52L1094.05 667.25"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M989.03 676.16L989.03 676.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M989.03 676.16L1094.05 667.25"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M989.03 676.16L858.46 542.13"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M989.03 676.16L1161.09 518.92"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M989.03 676.16L1275.86 700.75"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1094.48 -45L1094.48 -45"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1094.48 -45L1158.57 85.79"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1094.48 -45L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158.57 85.79L1158.57 85.79"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158.57 85.79L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158.57 85.79L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158.57 85.79L1311.4 -78.04"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1108.02 203.21L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1122.21 367.3L1122.21 367.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1122.21 367.3L1257.46 390.88"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1161.09 518.92L1161.09 518.92"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1161.09 518.92L1256.24 512.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1161.09 518.92L1122.21 367.3"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1161.09 518.92L1257.46 390.88"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1094.05 667.25L1094.05 667.25"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1094.05 667.25L1161.09 518.92"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1311.4 -78.04L1311.4 -78.04"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1311.4 -78.04L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1311.4 -78.04L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1311.4 -78.04L1094.48 -45"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1311.4 -78.04L1444.05 100.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1248.16 53.93L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1248.16 53.93L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1248.16 53.93L1444.05 100.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.46 390.88L1257.46 390.88"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.46 390.88L1256.24 512.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.46 390.88L1426.71 354.72"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.46 390.88L1409.05 542.54"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.46 390.88L1108.02 203.21"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.24 512.16L1256.24 512.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.24 512.16L1409.05 542.54"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.24 512.16L1275.86 700.75"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.86 700.75L1275.86 700.75"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.86 700.75L1420.23 687.78"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.86 700.75L1094.05 667.25"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.86 700.75L1409.05 542.54"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.86 700.75L1161.09 518.92"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1417.97 -44.34L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1417.97 -44.34L1560.53 -50.53"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1444.05 100.08L1444.05 100.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1444.05 100.08L1455.93 216.72"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1444.05 100.08L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1455.93 216.72"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1426.71 354.72"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1598.36 262.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1591.95 53.9"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.93 216.72L1248.16 53.93"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1426.71 354.72L1426.71 354.72"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1426.71 354.72L1409.05 542.54"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1426.71 354.72L1598.36 262.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1426.71 354.72L1546.04 518.38"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1426.71 354.72L1256.24 512.16"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1409.05 542.54L1409.05 542.54"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1409.05 542.54L1546.04 518.38"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1409.05 542.54L1420.23 687.78"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1409.05 542.54L1560.55 652.69"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1420.23 687.78L1420.23 687.78"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1420.23 687.78L1560.55 652.69"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1560.53 -50.53L1560.53 -50.53"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1560.53 -50.53L1591.95 53.9"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1591.95 53.9L1591.95 53.9"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1591.95 53.9L1444.05 100.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1591.95 53.9L1417.97 -44.34"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1591.95 53.9L1598.36 262.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1591.95 53.9L1311.4 -78.04"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1598.36 262.08L1598.36 262.08"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1546.04 518.38L1546.04 518.38"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1546.04 518.38L1560.55 652.69"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1560.55 652.69L1560.55 652.69"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1560.55 652.69L1275.86 700.75"
                        stroke="#132e65"
                        stroke-width="1.5"
                    ></path>
                    <circle
                        r="5"
                        cx="-66.64"
                        cy="360.3"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="-69.41"
                        cy="533.7"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="105.12"
                        cy="366.13"
                        fill="#132e65"
                    ></circle>
                    <circle r="5" cx="51.3" cy="548.33" fill="#132e65"></circle>
                    <circle
                        r="5"
                        cx="40.85"
                        cy="641.34"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="212.86"
                        cy="406.44"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="237.17"
                        cy="499.76"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="252.32"
                        cy="652.51"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="402.1"
                        cy="396.03"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="400.39"
                        cy="498.77"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="380.56"
                        cy="652.32"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="498.26"
                        cy="343.57"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="514.52"
                        cy="557.64"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="555.38"
                        cy="647.41"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="696.52"
                        cy="240.65"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="689.09"
                        cy="373.61"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="673.94"
                        cy="523.52"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="689.35"
                        cy="663.32"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="807.27"
                        cy="214.21"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="804.14"
                        cy="407.34"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="858.46"
                        cy="542.13"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="823.47"
                        cy="704.48"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="963.84"
                        cy="-89.64"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="957.34"
                        cy="103.36"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="975.97"
                        cy="189.57"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="982.55"
                        cy="361.82"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="997.72"
                        cy="501.52"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="989.03"
                        cy="676.16"
                        fill="#132e65"
                    ></circle>
                    <circle r="5" cx="1094.48" cy="-45" fill="#132e65"></circle>
                    <circle
                        r="5"
                        cx="1158.57"
                        cy="85.79"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1108.02"
                        cy="203.21"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1122.21"
                        cy="367.3"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1161.09"
                        cy="518.92"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1094.05"
                        cy="667.25"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1311.4"
                        cy="-78.04"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1248.16"
                        cy="53.93"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1257.46"
                        cy="390.88"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1256.24"
                        cy="512.16"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1275.86"
                        cy="700.75"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1417.97"
                        cy="-44.34"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1444.05"
                        cy="100.08"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1455.93"
                        cy="216.72"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1426.71"
                        cy="354.72"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1409.05"
                        cy="542.54"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1420.23"
                        cy="687.78"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1560.53"
                        cy="-50.53"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1591.95"
                        cy="53.9"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1598.36"
                        cy="262.08"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1546.04"
                        cy="518.38"
                        fill="#132e65"
                    ></circle>
                    <circle
                        r="5"
                        cx="1560.55"
                        cy="652.69"
                        fill="#132e65"
                    ></circle>
                    <path
                        d="M255.47 645L255.47 645"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M255.47 645L347.01 698.04"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M255.47 645L338.47 544.13"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M255.47 645L50.88 691.59"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M255.47 645L67.89 515.99"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M255.47 645L502.91 559.7"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M338.47 544.13L338.47 544.13"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M338.47 544.13L347.01 698.04"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M338.47 544.13L502.91 559.7"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M338.47 544.13L542.26 673.11"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M502.91 559.7L502.91 559.7"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M502.91 559.7L542.26 673.11"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L671.04 675.41"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L542.26 673.11"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L847.34 664.95"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L502.91 559.7"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L843.63 535.21"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M671.04 675.41L807.61 409.21"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158 -38.08L1158 -38.08"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158 -38.08L1243.14 -67.5"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158 -38.08L1149.84 100.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1158 -38.08L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1134.93 221.74L1134.93 221.74"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1134.93 221.74L1149.84 100.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1134.93 221.74L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1134.93 221.74L1100.47 344.47"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1243.14 -67.5L1243.14 -67.5"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1243.14 -67.5L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1243.14 -67.5L1149.84 100.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1243.14 -67.5L1455.92 -108.42"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1243.14 -67.5L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1429.53 217.93"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1595.58 251.52"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1566.65 62.32"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1592.32 389.88"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1429.53 217.93L1247.3 371.58"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1581.9 -56.78L1581.9 -56.78"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1581.9 -56.78L1566.65 62.32"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1581.9 -56.78L1455.92 -108.42"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1581.9 -56.78L1595.58 251.52"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-106.34 548.78L-106.34 548.78"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-106.34 548.78L-61.63 691.54"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-106.34 548.78L67.89 515.99"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-106.34 548.78L50.88 691.59"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-106.34 548.78L255.47 645"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-61.63 691.54L-61.63 691.54"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-61.63 691.54L50.88 691.59"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M-61.63 691.54L67.89 515.99"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M67.89 515.99L67.89 515.99"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M67.89 515.99L50.88 691.59"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M67.89 515.99L338.47 544.13"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M67.89 515.99L347.01 698.04"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M50.88 691.59L50.88 691.59"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M347.01 698.04L347.01 698.04"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M347.01 698.04L542.26 673.11"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M347.01 698.04L502.91 559.7"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M542.26 673.11L542.26 673.11"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.61 409.21L807.61 409.21"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.61 409.21L843.63 535.21"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.61 409.21L962.57 491.91"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.61 409.21L990.77 371.49"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M807.61 409.21L847.34 664.95"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M843.63 535.21L843.63 535.21"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M843.63 535.21L962.57 491.91"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M843.63 535.21L847.34 664.95"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M847.34 664.95L847.34 664.95"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M847.34 664.95L971.36 689.36"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M990.77 371.49L990.77 371.49"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M990.77 371.49L1100.47 344.47"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M990.77 371.49L962.57 491.91"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M962.57 491.91L962.57 491.91"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M962.57 491.91L971.36 689.36"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M962.57 491.91L1100.47 344.47"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M971.36 689.36L971.36 689.36"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M971.36 689.36L1122.51 689.76"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1149.84 100.51L1149.84 100.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1149.84 100.51L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1149.84 100.51L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1100.47 344.47L1100.47 344.47"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1100.47 344.47L1247.3 371.58"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1100.47 344.47L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1160.83 555.78L1160.83 555.78"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1160.83 555.78L1256.66 525.64"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1160.83 555.78L1122.51 689.76"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1122.51 689.76L1122.51 689.76"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1122.51 689.76L1278.89 687.16"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.06 41.35L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.06 41.35L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1275.06 41.35L1134.93 221.74"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.09 229.87L1257.09 229.87"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1257.09 229.87L1247.3 371.58"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1247.3 371.58L1247.3 371.58"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.66 525.64L1256.66 525.64"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.66 525.64L1247.3 371.58"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.66 525.64L1278.89 687.16"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1256.66 525.64L1399.66 642.22"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1278.89 687.16L1278.89 687.16"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1278.89 687.16L1399.66 642.22"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.92 -108.42L1455.92 -108.42"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.92 -108.42L1566.65 62.32"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.92 -108.42L1275.06 41.35"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1455.92 -108.42L1158 -38.08"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1458.52 553.9L1458.52 553.9"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1458.52 553.9L1399.66 642.22"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1458.52 553.9L1585.49 494.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1458.52 553.9L1256.66 525.64"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1399.66 642.22L1399.66 642.22"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1399.66 642.22L1594.03 708.46"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1399.66 642.22L1585.49 494.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1566.65 62.32L1566.65 62.32"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1566.65 62.32L1595.58 251.52"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1595.58 251.52L1595.58 251.52"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1595.58 251.52L1592.32 389.88"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1592.32 389.88L1592.32 389.88"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1592.32 389.88L1585.49 494.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1585.49 494.51L1585.49 494.51"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1585.49 494.51L1594.03 708.46"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1594.03 708.46L1594.03 708.46"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1594.03 708.46L1458.52 553.9"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1594.03 708.46L1278.89 687.16"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M1594.03 708.46L1592.32 389.88"
                        stroke="hsl(228.5, 77.2%, 51.5%)"
                        stroke-width="1.5"
                    ></path>
                    <circle
                        r="25"
                        cx="255.47"
                        cy="645"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="338.47"
                        cy="544.13"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="502.91"
                        cy="559.7"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="671.04"
                        cy="675.41"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="1158"
                        cy="-38.08"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="1134.93"
                        cy="221.74"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="1243.14"
                        cy="-67.5"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="1429.53"
                        cy="217.93"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="25"
                        cx="1581.9"
                        cy="-56.78"
                        fill='url("#SvgjsRadialGradient1020")'
                    ></circle>
                    <circle
                        r="5"
                        cx="-106.34"
                        cy="548.78"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="-61.63"
                        cy="691.54"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="67.89"
                        cy="515.99"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="50.88"
                        cy="691.59"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="347.01"
                        cy="698.04"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="542.26"
                        cy="673.11"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="807.61"
                        cy="409.21"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="843.63"
                        cy="535.21"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="847.34"
                        cy="664.95"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="990.77"
                        cy="371.49"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="962.57"
                        cy="491.91"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="971.36"
                        cy="689.36"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1149.84"
                        cy="100.51"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1100.47"
                        cy="344.47"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1160.83"
                        cy="555.78"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1122.51"
                        cy="689.76"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1275.06"
                        cy="41.35"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1257.09"
                        cy="229.87"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1247.3"
                        cy="371.58"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1256.66"
                        cy="525.64"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1278.89"
                        cy="687.16"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1455.92"
                        cy="-108.42"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1458.52"
                        cy="553.9"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1399.66"
                        cy="642.22"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1566.65"
                        cy="62.32"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1595.58"
                        cy="251.52"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1592.32"
                        cy="389.88"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1585.49"
                        cy="494.51"
                        fill="#8b9ad9"
                    ></circle>
                    <circle
                        r="5"
                        cx="1594.03"
                        cy="708.46"
                        fill="#8b9ad9"
                    ></circle>
                </g>
                <defs>
                    <mask id="SvgjsMask1019">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                    <radialGradient id="SvgjsRadialGradient1020">
                        <stop stop-color="#ffffff" offset="0.1"></stop>
                        <stop stop-color="#1735b3" offset="0.2"></stop>
                        <stop
                            stop-color="rgba(23, 53, 179, 0)"
                            offset="1"
                        ></stop>
                    </radialGradient>
                </defs>
            </svg> */}
            <motion.div className="flex flex-col md:flex-row w-[85%] max-w-[1200px] mx-auto items-center gap-16 md:gap-6">
                {/* Text */}
                <motion.div
                    variants={staggedParrent}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="hero-text flex flex-col gap-6"
                >
                    <motion.h1
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                        className="text-5xl font-bold"
                    >
                        Where Vision Meets{" "}
                        <span className="text-[#2e6a9e]">
                            Digital Perfection
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                        className="text-lg"
                    >
                        Professional websites and social media solutions
                        designed to grow your online presence and convert
                        visitors into customers.
                    </motion.p>
                    <motion.button
                        className="w-fit"
                        variants={defaultVariant}
                        transition={{ bounce: 0 }}
                    >
                        <a href="#contactus">
                            <Button className="bg-[#2e6a9e] shadow-[#2e6a9e] shadow-lg hover:bg-[#2b3946] w-fit h-[2.5rem]">
                                Book Free Consultation
                            </Button>
                        </a>
                    </motion.button>
                </motion.div>

                {/* Image */}
                <motion.div
                    variants={staggedParrent}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    className="relative hero-img-container flex w-full"
                >
                    <ImgSkeleton
                        src="/img/heroImg2.png"
                        styling="w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                        motionVariant={defaultTopVariant}
                    />
                    <ImgSkeleton
                        src="/img/heroImg.png"
                        styling="absolute right-0 -top-10 w-[50%] aspect-square drop-shadow-gray-300 drop-shadow-2xl"
                        motionVariant={defaultTopVariant}
                    />
                </motion.div>
            </motion.div>
            <BackgroundBeams className="-z-100" />
        </div>
    );
}
