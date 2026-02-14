import RealEstateFacilitiesCard from "@/components/shared/RealEstateFacilitiesCard";

const RealEstateFacilities = () => {
  const cards = [
    {
      title: "Real Estate & Lease Management",
      image: "/images/sercive3.png",
    },
    {
      title: "Capital Planning & Projects",
      image: "/images/service.png",
    },
    {
      title: "Space Optimization & Workplace Management",
      image: "/images/service2.png",
    },
    {
      title: "Operations & Maintenance",
      image: "/images/sercive3.png",
    },
    {
      title: "Sustainability & Energy Management",
      image: "/images/service.png",
    },
    {
      title: "Performance Analytics & Reporting",
      image: "/images/service2.png",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-900">
            Maximo® Real Estate & Facilities
          </h2>
          <p className="mt-1 text-base text-slate-500">
            Technology solutions powered by IBM Maximo for enterprise workplace
            management
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <RealEstateFacilitiesCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateFacilities;
