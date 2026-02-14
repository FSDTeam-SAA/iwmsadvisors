import OurServiceCard from "@/components/shared/OurServiceCard";

const Services = () => {
  const services = [
    {
      title: "IWMS Consulting",
      description:
        "Streamlining workplace operations with expert IWMS advisory services.",
      image: "/images/service.png",
      href: "#contact",
    },
    {
      title: "IWMS Implementation",
      description:
        "End-to-end deployment of enterprise workplace management solutions.",
      image: "/images/sercive3.png",
      href: "#contact",
    },
    {
      title: "System Integration",
      description:
        "Seamless integration across platforms for unified operations.",
      image: "/images/service2.png",
      href: "#contact",
    },
    {
      title: "Managed Support",
      description: "Reliable support to maximize uptime and performance.",
      image: "/images/sercive3.png",
      href: "#contact",
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Our Services</h2>
          <p className="mt-1 text-base text-slate-500">
            Comprehensive solutions for workplace management excellence
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <OurServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
