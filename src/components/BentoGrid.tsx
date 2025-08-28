"use client";

import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import CardFlip from "./CardFlip";
import PricingCard from "./PricingCard";
import AppleActivityCard from "./AppleActivityCard";
import AILoadingState from "./AILoadingState";
import { Testimonials } from "./ui/testimonials";
import { useState } from "react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

// Componente wrapper con efecto 3D tilt
const TiltedWidget = ({ 
    children, 
    initialRotation = 0,
    scale = 1.02, 
    speed = 400 
}: { 
    children: React.ReactNode; 
    initialRotation?: number;
    scale?: number; 
    speed?: number; 
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="h-full"
            initial={{ 
                rotateZ: initialRotation,
                transformStyle: "preserve-3d"
            }}
            animate={{ 
                rotateZ: isHovered ? 0 : initialRotation,
                transformStyle: "preserve-3d"
            }}
            whileHover={{ 
                rotateZ: 0,
                y: -5, 
                scale: scale,
                transformStyle: "preserve-3d"
            }}
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                duration: speed / 1000
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {children}
        </motion.div>
    );
};



export default function BentoGrid({ isDark = true }: { isDark?: boolean }) {
    return (
        <div className="space-y-8">
            {/* Primera fila - 2 widgets */}
            <div className="flex justify-center items-start space-x-4">
                {/* CardFlip - Superior Izquierda (rotación -5°) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex-shrink-0 w-[280px]"
                >
                    <TiltedWidget initialRotation={-5} scale={1.02} speed={350}>
                        <CardFlip isDark={isDark} />
                    </TiltedWidget>
                </motion.div>
                {/* AILoadingState - Superior Derecha (rotación +5°) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex-shrink-0"
                >
                    <TiltedWidget initialRotation={5} scale={1.02} speed={350}>
                        <AILoadingState />
                    </TiltedWidget>
                </motion.div>
            </div>

            {/* Segunda fila - 1 widget que ocupa el ancho completo */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full"
            >
                <div className="bg-transparent rounded-2xl p-6 h-[200px] flex items-center justify-center overflow-hidden">
                    <Testimonials />
                </div>
            </motion.div>

            {/* Tercera fila - 2 widgets */}
            <div className="grid grid-cols-2 gap-6">
                {/* AppleActivityCard - Inferior Izquierda (rotación -5°) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="col-span-1"
                >
                    <TiltedWidget initialRotation={-5} scale={1.02} speed={300}>
                        <AppleActivityCard />
                    </TiltedWidget>
                </motion.div>
                {/* PricingCard - Inferior Derecha (rotación +5°) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="col-span-1"
                >
                    <TiltedWidget initialRotation={5} scale={1.02} speed={300}>
                        <PricingCard isDark={isDark} />
                    </TiltedWidget>
                </motion.div>
            </div>
        </div>
    );
}
