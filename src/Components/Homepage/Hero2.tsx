"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Where Will You Go Next??",
    description:
      "Just enter your destination and let smart tech guide you.Real-time suggestions make decisions easier than ever.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/assets/img/image_1.png"
          width={440}
          height={440}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Vehicle Options",
    description:
      "Choose from cars, buses, or vans—all at your fingertips.Custom transport options based on your travel needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/assets/img/image_2.png"
          width={440}
          height={440}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Booking And Confirmation",
    description:"Your ride is locked in with real-time processing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/assets/img/image_3.png"
          width={440}
          height={440}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Your Ride Has Arrived",
    description:
      "City lights reflect your smooth and secure ride.Precision-timed arrivals with zero delays.Say goodbye to waiting, and hello to luxury.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/assets/img/image_4.png"
          width={440}
          height={440}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Step Into Smart Mobility",
    description:
      "The door opens to a ride powered by intelligent systems.Friendly AI welcomes you on board with ease.Comfort, safety, and innovation come standard.Designed for seamless door-to-door experiences.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-serif">
        <img
          src="/assets/img/image_5.png"
          width={440}
          height={440}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 font-serif">
      <StickyScroll content={content} />
    </div>
  );
}
