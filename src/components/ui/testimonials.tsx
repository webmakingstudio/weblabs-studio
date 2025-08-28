"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem className="lg:basis-1/2" key={index}>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl h-full lg:col-span-2 p-3 aspect-video flex justify-between flex-col">
                <User className="w-5 h-5 stroke-1 text-zinc-600 dark:text-zinc-400" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-base tracking-tight text-zinc-900 dark:text-white">
                      La mejor decisión
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-xs text-xs">
                      Nuestro objetivo era optimizar el comercio PYMES, haciéndolo más fácil
                      y rápido que nunca.
                    </p>
                  </div>
                  <p className="flex flex-row gap-2 text-xs items-center">
                    <span className="text-zinc-500 dark:text-zinc-500">Por</span>{" "}
                    <Avatar className="h-4 w-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>JJ</AvatarFallback>
                    </Avatar>
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs">Juan Jiménez</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export { Testimonials };
