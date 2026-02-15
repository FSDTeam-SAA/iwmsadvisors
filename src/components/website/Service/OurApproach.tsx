import { CheckCheck, Flashlight, Shield, Target } from "lucide-react";

const OurApproach = () => {
  const solutions = [
    {
      title: "Assess",
      description: "Analyze requirements and current state",
      icon: Target,
    },
    {
      title: "Configure",
      description: "Create wireframes and mockups for user interfaces",
      icon: Flashlight,
    },
    {
      title: "Deploy",
      description: "Implement features and functionality in the application",
      icon: CheckCheck,
    },
    {
      title: "Optimize",
      description: "Evaluate usability and performance through user testing",
      icon: Shield,
    },
  ];

  return (
    <section className="w-full bg-[#0f66a6] py-12 text-white">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">IWMS Solutions</h3>
          <h5 className="mt-1 text-base text-white">
            Comprehensive use cases for modern workplace management
          </h5>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0f66a6]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <h6 className="mt-1 text-base text-white">
                  {item.description}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
