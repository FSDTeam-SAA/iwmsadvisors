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
    <section className="w-full bg-[#0f66a6] py-10 text-white">
      <div className="mx-auto w-full container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-4xl font-semibold text-white">Why Choose Us</h4>
          <p className="mt-1 text-xs text-white/80">
            Your trusted partner for enterprise IWMS success
          </p>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-3 text-xs font-semibold">{item.title}</h3>
                <p className="mt-1 text-[11px] text-white/80">
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
