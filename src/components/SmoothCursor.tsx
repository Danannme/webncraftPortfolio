"use client";

import { useState, useEffect, useRef } from "react";

export default function SmoothCursor() {
    const mousePosition = useRef({ x: 0, y: 0 });

    const borderDotPosition = useRef({ x: 0, y: 0 });

    const [renderPos, setRenderPos] = useState({
        border: { x: 0, y: 0 },
    });
    const [isHovering, setIsHovering] = useState(false);

    const BORDER_DOT_SMOOTHNESS = 0.2;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners
        window.addEventListener("mousemove", handleMouseMove);

        const interactiveElements = document.querySelectorAll(
            "a, button, img, input, textarea, select"
        );
        interactiveElements.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        // Animation function for smooth movement
        const animate = () => {
            const lerp = (start: number, end: number, factor: number) => {
                return start + (end - start) * factor;
            };

            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS
            );

            setRenderPos({
                border: {
                    x: borderDotPosition.current.x,
                    y: borderDotPosition.current.y,
                },
            });

            requestAnimationFrame(animate);
        };

        // Start animation loop
        const animationId = requestAnimationFrame(animate);

        // Clean up
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

            interactiveElements.forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });

            cancelAnimationFrame(animationId);
        };
    }, []);

    if (typeof window === "undefined") return null;

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
            <div
                className="absolute rounded-full border dark:border-white border-none bg-[radial-gradient(circle,_rgba(99,102,241,0.4)_0%,_rgba(59,130,246,0.2)_40%,_rgba(59,130,246,0)_70%)]"
                style={{
                    width: isHovering ? "44px" : "80px",
                    height: isHovering ? "44px" : "80px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: "width 0.3s, height 0.3s",
                }}
            />
        </div>
    );
}
