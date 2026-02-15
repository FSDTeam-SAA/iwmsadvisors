import Link from "next/link";

import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-[50vh] w-full overflow-hidden border-b border-slate-200 bg-slate-900"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.1) 100%), url('/images/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-h-[360px] w-full max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <h1 className="text-6xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            Integrated IWMS
            <br />
            Solutions for Smarter Facilities
          </h1>
          <h4 className="mt-3 text-2xl font-medium uppercase tracking-[0.2em] text-white">
            Streamline your facilities with enterprise-grade IWMS solutions
          </h4>
          <h5 className="mt-2 text-base text-white">
            for Space, Asset, and Operations Management.
          </h5>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-9 rounded-sm bg-primary px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
            >
              <Link href="#about">Learn More About Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-9 rounded-sm border-primary bg-transparent px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-white/10"
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
