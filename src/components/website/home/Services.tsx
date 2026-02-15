import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-900">
            Our Services
          </h2>
          <p className="mt-1 text-base text-slate-500">
            Comprehensive solutions for workplace management excellence
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
