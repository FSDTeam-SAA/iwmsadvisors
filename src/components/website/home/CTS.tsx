import Link from "next/link";

import { Button } from "@/components/ui/button";

const CTS = () => {
  return (
    <section className="w-full bg-[#0f66a6] py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl text-white font-semibold ">
            Ready to modernize your workplace management?
          </h3>
          <h6 className="mt-2 text-base text-white">
            Connect with our IWMS experts to discuss your specific needs and
            <br className="hidden sm:block" />
            explore how we can help transform your operations.
          </h6>
          <div className="mt-5">
            <Button
              asChild
              className="h-9 rounded-sm bg-white px-5 text-xs font-semibold uppercase tracking-wide text-[#0f66a6] hover:bg-slate-50"
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
