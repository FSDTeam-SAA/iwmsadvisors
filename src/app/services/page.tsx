import OurApproach from "@/components/website/Service/OurApproach";
import ServiceHero from "@/components/website/Service/ServiceHero";
import Services from "@/components/website/Service/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <Services />
      <OurApproach />
    </div>
  );
};

export default page;
