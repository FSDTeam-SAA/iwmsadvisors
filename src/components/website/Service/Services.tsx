import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { serviceDetails } from "@/data/serviceDetails";

const Services = () => {
  return (
    <section id="services" className="w-full bg-white py-12">
      <div className="container mx-auto w-full space-y-8 px-4 sm:px-6 lg:px-8">
        {serviceDetails.map((service, index) => {
          const isReversed = service.reverse ?? index % 2 === 1;
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="grid items-center gap-8 rounded-md border border-slate-200 bg-white p-6 md:grid-cols-2"
            >
              <div className={isReversed ? "md:order-2" : "md:order-1"}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md  bg-[#0f66a6]/10 text-[#0f66a6]">
                    <Icon className="h-4 w-4 text-[#D9EFFF] bg-[#0D67A9]" />
                  </span>
                  <h3 className="text-2xl font-semibold text-[#0D67A9]">
                    {service.title}
                  </h3>
                </div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-rose-50 px-3 py-1 text-base font-medium text-rose-600">
                  <span className="inline-flex h-2 w-2 rounded-md bg-rose-500" />
                  {service.badge}
                </div>
                <p className="mt-3 whitespace-pre-line text-base text-slate-600">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="h-9 bg-primary text-white px-4 text-base"
                  >
                    <Link href={service.href ?? "#contact"}>Contact Us</Link>
                  </Button>
                  <Link
                    href={service.href ?? "#contact"}
                    className="text-base font-semibold text-slate-900"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className={isReversed ? "md:order-1" : "md:order-2"}>
                <div className="relative h-60 w-full overflow-hidden rounded-md md:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
