import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-white py-10">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h5 className="text-4xl font-semibold uppercase tracking-[0.1em] text-black">
            About Us
          </h5>
          <p className="mt-2 text-base text-slate-500">
            Empowering organizations with smarter workplace management
            solutions.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-3xl">
              Shaping Smarter Workplaces
            </h2>
            <div className="mt-3 space-y-3 text-base text-slate-600">
              <p>
                We are a team of IWMS (Integrated Workplace Management System)
                specialists dedicated to helping organizations transform the way
                they manage facilities, assets, and workplace operations. With
                expertise in leading platforms such as IBM TRIRIGA and Maximo,
                we deliver enterprise-ready solutions that optimize space
                utilization, streamline maintenance, and enhance overall
                performance.
              </p>
              <p>
                Our mission is to empower businesses with smart, scalable, and
                secure workplace technologies that drive efficiency, compliance,
                and long-term value. We believe in building lasting partnerships
                through innovation, integrity, and continuous support.
              </p>
              <p>
                By combining strategic consulting, tailored implementation, and
                ongoing guidance, we ensure that every solution aligns with your
                business goals and delivers measurable impact.
              </p>
            </div>

            <div className="mt-5">
              <Button
                asChild
                className="h-8 rounded-sm bg-blue-600 px-4 text-xs font-semibold text-white hover:bg-blue-700"
              >
                <Link href="#services">Read More</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200">
            <Image
              src="/images/about.png"
              alt="Team collaborating in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
