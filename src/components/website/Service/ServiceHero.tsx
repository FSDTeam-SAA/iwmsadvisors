import Image from "next/image";

const ServiceHero = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/floorplanshero.jpg"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Our Services
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
