import { CheckCircle2, Rocket, Settings, Target } from "lucide-react";

const IWMsSolution = () => {
  const solutions = [
    {
      title: "Assess",
      description: "Analyze requirements and current state",
      icon: Target,
    },
    {
      title: "Configure",
      description: "Create wireframes and mockups for user interfaces",
      icon: Settings,
    },
    {
      title: "Deploy",
      description: "Implement features and functionality in the application",
      icon: Rocket,
    },
    {
      title: "Optimize",
      description: "Evaluate usability and performance through user testing",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full bg-primary my-12 md:my-20 py-15 text-white">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl mb-2 font-bold leading-[150%] ">IWMS Solutions</h3>
          <h5 className="mt-1 text-xl leading-[120%] font-normal text-white">
            Comprehensive use cases for modern workplace management
          </h5>
        </div>

        <div className="mt-8 md:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex  items-center justify-center p-4 rounded-full bg-white text-[#0f66a6]">
                  <Icon className="h-8 w-8 " />
                </div>
                <h3 className="mt-4 text-2xl leading-[120%] font-semibold">{item.title}</h3>
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

export default IWMsSolution;
