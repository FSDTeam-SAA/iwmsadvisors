import CustomImage from "@/components/shared/CustomImage";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full  my-12 md:my-20">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <h5 className="text-4xl font-bold  leading-10 text-[#101828]">
            About Us
          </h5>
          <p className="mt-2 text-base md:text-xl font-normal leading-7 text-[#4A5565]">
            Empowering organizations with smarter workplace management
            solutions.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl md:text-4xl font-medium text-[#070719] sm:text-3xl">
              Shaping Smarter Workplaces
            </h3>
            <div className="mt-6 space-y-3 text-base text-slate-600">
              <p className="text-lg  text-[#000000] font-normal">
                We are a team of IWMS (Integrated Workplace Management System)
                specialists dedicated to helping organizations transform the way
                they manage facilities, assets, and workplace operations. With
                expertise in leading platforms such as IBM TRIRIGA and Maximo,
                we deliver enterprise-ready solutions that optimize space
                utilization, streamline maintenance, and enhance overall
                performance.
              </p>
              <p className="text-lg  text-[#000000] font-normal">
                Our mission is to empower businesses with smart, scalable, and
                secure workplace technologies that drive efficiency, compliance,
                and long-term value. We believe in building lasting partnerships
                through innovation, integrity, and continuous support.
              </p>
              <p className="text-lg  text-[#000000] font-normal">
                By combining strategic consulting, tailored implementation, and
                ongoing guidance, we ensure that every solution aligns with your
                business goals and delivers measurable impact.
              </p>
            </div>

            <div className="mt-5">
              <Button
                asChild
                className="h-8 rounded-sm px-7 py-5 text-base font-semibold"
              >
                <Link href="#services">Read More</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200">
            <CustomImage
              src="/images/about.jpg"
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
