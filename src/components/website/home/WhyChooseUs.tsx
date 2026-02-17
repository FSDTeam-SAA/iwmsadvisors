import { BadgeCheck, Lock, Medal, Users } from "lucide-react";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Certified IWMS Experts",
      description:
        "Industry-certified professionals with deep platform expertise",
      icon: BadgeCheck,
    },
    {
      title: "Enterprise & Compliance Ready",
      description:
        "Security-first approach with regulatory compliance built-in",
      icon: Lock,
    },
    {
      title: "Proven Delivery Framework",
      description:
        "Streamlined methodology ensuring on-time, on-budget projects",
      icon: Medal,
    },
    {
      title: "Long-Term Support Partnership",
      description:
        "Industry-certified professionals with deep platform expertise",
      icon: Users,
    },
  ];

  return (
    <section className="w-full bg-[#0D67A9] my-12 md:my-20 py-12 text-white">
      <div className="mx-auto w-full container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-4xl mb-2 font-bold leading-[150%] ">Why Choose Us</h4>
          <h5 className="mt-1 text-xl leading-[120%] font-normal text-white">
            Your trusted partner for enterprise IWMS success
          </h5>
        </div>

        <div className="mt-8 md:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex  items-center justify-center p-4 rounded-full bg-[#3173a3]  text-white">
                  <Icon className="h-8 w-8 text-white " />
                </div>
                <h3 className="mt-4 text-base leading-[120%] font-semibold">{item.title}</h3>
                <p className="mt-3 text-base font-normal leading-[120%] text-white">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
