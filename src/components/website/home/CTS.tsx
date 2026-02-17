import Link from "next/link";

import { Button } from "@/components/ui/button";

const CTS = () => {
  return (
    <section className="w-full bg-[#0f66a6] py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl  text-white font-bold leading-12  ">
            Ready to modernize your workplace management?
          </h3>
          <p className=" text-xl font-normal leading-7 mt-4 mb-6  text-white ">
            Connect with our IWMS experts to discuss your specific needs and
            <br className="hidden sm:block" />
            explore how we can help transform your operations.
          </p>
          <div className="mt-5">
            <Button
              asChild
              className="py-6 rounded-sm bg-white  text-lg  font-bold  tracking-wide text-[#0A2463] hover:bg-slate-50"
            >
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTS;
