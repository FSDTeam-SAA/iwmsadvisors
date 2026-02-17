import Image from "next/image";
import React from "react";

const CareersHero = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className=" absolute inset-0 bg-black/30"></div>

      </div>
      <div className="container mx-auto flex min-h-[40vh] items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Careers
          </h1>
          <p className="text-xl font-normal leading-[140%] mt-2 text-white">
            Proven Success Stories That Showcase Our Expertise in Workplace
            Transformation and Operational Efficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
