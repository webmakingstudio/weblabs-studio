"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Planes de Precios Transparentes",
  description = "Elige el plan que mejor funcione para ti\nTodos los planes incluyen acceso a nuestra plataforma, herramientas de generación de leads y soporte dedicado.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
  };

  return (
         <div className="container py-4">
              <div className="flex justify-center mb-4">
         <label className="relative inline-flex items-center cursor-pointer">
           <Label>
             <Switch
               ref={switchRef as any}
               checked={!isMonthly}
               onCheckedChange={handleToggle}
               className="relative"
             />
           </Label>
         </label>
         <span className="ml-2 font-semibold text-zinc-900 dark:text-white">
           Facturación anual <span className="text-green-500">(Ahorra 20%)</span>
         </span>
       </div>

               <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: plan.isPopular ? -20 : 0,
              opacity: 1,
              x: index === 2 ? -30 : index === 0 ? 30 : 0,
              scale: index === 0 || index === 2 ? 0.94 : 1.0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-white dark:bg-zinc-900 text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-green-500 border-2" : "border-zinc-200 dark:border-zinc-700",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-green-500 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
                  {plan.name}
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    ${isMonthly ? plan.price : plan.yearlyPrice}
                  </span>
                  {plan.period !== "Next 3 months" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-zinc-600 dark:text-zinc-400">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  {isMonthly ? "facturado mensualmente" : "facturado anualmente"}
                </p>

                <ul className="mt-5 gap-2 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-left text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <hr className="w-full mb-4 border-zinc-200 dark:border-zinc-700" />
                
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-green-500 hover:ring-offset-1 hover:bg-green-500 hover:text-white",
                    plan.isPopular
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700"
                  )}
                >
                  {plan.buttonText}
                </Link>
                
                <p className="mt-4 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  {plan.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
