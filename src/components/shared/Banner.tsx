import Link from "next/link";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.6) 40%,
              rgba(0, 0, 0, 0) 100%
            ),
            url('/images/banner.jpg')
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto container flex min-h-screen items-center">
        <div className=" text-white">
          {/* Main Heading */}
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            Integrated IWMS
            <br />
            <span className="text-white/90">
              Solutions for Smarter Facilities
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg opacity-90 font-normal  md:text-xl text-white max-w-3xl">
            Streamline Your Facilities With Enterprise-Grade IWMS Solutions For
            Space, Asset, And Operations Management.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              asChild
              className="h-14 rounded-md px-8 text-base font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Link href="#about">Learn More About Us</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-14 rounded-md border-2 border-white/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/50 hover:text-white"
            >
              <Link href="#contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
