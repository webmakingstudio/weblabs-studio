"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";

export interface CardFlipProps {
    title?: string;
    subtitle?: string;
    description?: string;
    features?: string[];
    isDark?: boolean;
}

export default function CardFlip({
    title = "Comienza tu Proyecto Ahora",
    subtitle = "Haz que tu Negocio Destaque",
    description = "Lleva tu marca al siguiente nivel con un diseño profesional y personalizado.",
    features = ["Diseño UI/UX", "Optimización SEO", "Responsive", "Soporte personalizado"],
    isDark = true,
}: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full max-w-[280px] h-[320px] group [perspective:1000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-transform duration-700 ease-out",
                    isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        isDark ? "bg-zinc-900" : "bg-zinc-50",
                        `border ${isDark ? "border-zinc-800/50" : "border-zinc-200"}`,
                        "shadow-xs dark:shadow-lg",
                        "transition-opacity duration-300 ease-out",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100",
                        "[transform-style:preserve-3d]"
                    )}
                >
                    <div className={`relative h-full overflow-hidden bg-gradient-to-b ${isDark ? "from-zinc-900 to-black" : "from-zinc-100 to-white"}`}>
                                                 <div className="absolute inset-0 flex items-start justify-center pt-16">
                             <div className="relative w-[200px] h-[100px] flex items-center justify-center">
                                {[...Array(10)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "absolute w-[50px] h-[50px]",
                                            "rounded-[140px]",
                                            "animate-[scale_3s_linear_infinite]",
                                            "opacity-0",
                                            "shadow-[0_0_50px_rgba(34,197,94,0.5)]",
                                            "group-hover:animate-[scale_2s_linear_infinite]"
                                        )}
                                        style={{
                                            animationDelay: `${i * 0.3}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="space-y-1.5">
                                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-zinc-900"} leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]`}>
                                    {title}
                                </h3>
                                <p className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-600"} line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]`}
                                     style={{ transitionDelay: '50ms' }}>
                                    {subtitle}
                                </p>
                            </div>
                            <div className="relative group/icon">
                                <div
                                    className={cn(
                                        "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                                        "bg-gradient-to-br from-green-400/20 via-green-400/10 to-transparent"
                                    )}
                                />
                                <Repeat2 className="relative z-10 w-4 h-4 text-green-400 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-6 rounded-2xl",
                        `bg-gradient-to-b ${isDark ? "from-zinc-900 to-black" : "from-zinc-100 to-white"}`,
                        `border ${isDark ? "border-zinc-800" : "border-zinc-200"}`,
                        "shadow-xs dark:shadow-lg",
                        "flex flex-col",
                        "transition-opacity duration-300 ease-out",
                        "group-hover:shadow-lg dark:group-hover:shadow-xl",
                        !isFlipped ? "opacity-0" : "opacity-100",
                        "[transform-style:preserve-3d]"
                    )}
                >
                                         <div className="flex-1 space-y-4">
                         <div className="space-y-2">
                                                           <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-zinc-900"} leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]`}>
                                 Creamos tu Web
                             </h3>
                                                           <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"} tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] line-clamp-2`}>
                                 {description}
                             </p>
                         </div>

                         <div className="space-y-1.5">
                             {features.map((feature, index) => (
                                                              <div
                                 key={feature}
                                                                     className={`flex items-center gap-2 text-sm ${isDark ? "text-zinc-300" : "text-zinc-700"} transition-all duration-500`}
                                 style={{
                                     transform: isFlipped
                                         ? "translateX(0)"
                                         : "translateX(-10px)",
                                     opacity: isFlipped ? 1 : 0,
                                     transitionDelay: `${
                                         index * 100 + 200
                                     }ms`,
                                 }}
                             >
                                 <ArrowRight className="w-4 h-4 text-green-400" />
                                 <span>{feature}</span>
                             </div>
                             ))}
                         </div>
                     </div>

                                         <div className={`pt-4 mt-4 border-t ${isDark ? "border-zinc-800" : "border-zinc-200"}`}>
                         <a href="/precios" className="block">
                             <div
                                 className={cn(
                                     "group/start relative",
                                     "flex items-center justify-between",
                                     "p-2.5 rounded-lg",
                                     "transition-all duration-300",
                                                                     `bg-gradient-to-r ${isDark ? "from-zinc-800 via-zinc-800 to-zinc-800" : "from-zinc-100 via-zinc-100 to-zinc-100"}`,
                                     "hover:from-green-400/10 hover:from-0% hover:via-green-400/5 hover:via-100% hover:to-transparent hover:to-100%",
                                     `${isDark ? "hover:from-green-400/20 hover:from-0% hover:via-green-400/10 hover:via-100% hover:to-transparent hover:to-100%" : "hover:from-green-400/10 hover:from-0% hover:via-green-400/5 hover:via-100% hover:to-transparent hover:to-100%"}`,
                                     "hover:scale-[1.02] hover:cursor-pointer"
                                 )}
                             >
                                <span className={`text-sm font-medium ${isDark ? "text-white" : "text-zinc-900"} transition-colors duration-300 group-hover/start:text-green-600 dark:group-hover/start:text-green-400`}>
                                    Comienza ahora
                                </span>
                            <div className="relative group/icon">
                                <div
                                    className={cn(
                                        "absolute inset-[-6px] rounded-lg transition-all duration-300",
                                        "bg-gradient-to-br from-green-400/20 via-green-400/10 to-transparent",
                                        "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                                    )}
                                />
                                <ArrowRight className="relative z-10 w-4 h-4 text-green-400 transition-transform duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
                            </div>
                        </div>
                    </a>
                </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scale {
                    0% {
                        transform: scale(2);
                        opacity: 0;
                        box-shadow: 0px 0px 50px rgba(34, 197, 94, 0.5);
                    }
                    50% {
                        transform: translate(0px, -5px) scale(1);
                        opacity: 1;
                        box-shadow: 0px 8px 20px rgba(34, 197, 94, 0.5);
                    }
                    100% {
                        transform: translate(0px, 5px) scale(0.1);
                        opacity: 0;
                        box-shadow: 0px 10px 20px rgba(34, 197, 94, 0);
                    }
                }
            `}</style>
        </div>
    );
}
