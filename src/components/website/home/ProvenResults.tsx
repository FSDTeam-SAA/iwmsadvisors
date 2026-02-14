const ProvenResults = () => {
  const results = [
    {
      value: "30%",
      title: "Space Optimization",
      description: "Average workspace efficiency gain",
    },
    {
      value: "25%",
      title: "Operational Cost Reduction",
      description: "Reduced facilities management expenses",
    },
    {
      value: "99.9%",
      title: "System Reliability",
      description: "Uptime across our implementations",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            Proven Results
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Delivering measurable impact for our clients
          </p>
        </div>

        <div className="mt-8 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-slate-100 bg-white p-4"
            >
              <p className="text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                {item.title}
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
