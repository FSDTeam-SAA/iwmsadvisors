import CaseStudyCard from "@/components/shared/caseStudyCard";

const CaseStudies = () => {
  const studies = [
    {
      title: "Global Portfolio Optimization",
      description: "35% reduction in operational costs across 200+ facilities",
      image: "/images/service3.png",
      href: "#",
    },
    {
      title: "Asset Management Transformation",
      description:
        "50% improvement in equipment uptime and maintenance efficiency",
      image: "/images/service2.png",
      href: "#",
    },
    {
      title: "Integrated Facility Management",
      description: "40% faster response times for facility service requests",
      image: "/images/service.png",
      href: "#",
    },
  ];

  return (
    <section id="case-studies" className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-900">Case Studies</h2>
          <p className="mt-1 text-xs text-slate-500">
            Proven success stories that showcase our expertise in workplace
            transformation and operational efficiency
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
