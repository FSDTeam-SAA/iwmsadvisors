import CustomImage from "@/components/shared/CustomImage";

const ServiceHero = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <CustomImage
          src="/images/floorplanshero.jpg"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className=" absolute inset-0 bg-black/30">

        </div>
      </div>
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12 md:py-20 reveal">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-xl font-normal leading-[140%] mt-2 text-white">
            Transforming Workplaces with End-to-End IWMS Solutions Like Consulting, Implementation, Integration, and Support All in One Place
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
