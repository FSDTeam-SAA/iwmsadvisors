import CustomImage from "@/components/shared/CustomImage";
import { Award, Briefcase, CheckCircle, Lock } from "lucide-react";

const AboutTeam = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold text-primary">
                Transforming Facility Management Through Technology
              </h1>
              <p className="mt-4 text-base text-[#4A5565]">
                IWMS Advisors delivers comprehensive workplace management
                solutions that combine industry expertise with cutting-edge
                technology. Our team of certified professionals brings decades
                of collective experience in implementing and optimizing
                Integrated Workplace Management Systems for organizations
                worldwide.
              </p>
              <p className="mt-4 text-base text-[#4A5565]">
                We are committed to helping organizations unlock the full
                potential of their facilities, reduce operational costs, and
                create better workplace experiences for their teams. Our
                client-centric approach ensures that every solution is tailored
                to your unique business needs and objectives.
              </p>
              <p className="mt-4 text-base text-[#4A5565]">
                At IWMS Solutions, we believe in building long-term partnerships
                rather than one-time projects. Our commitment extends beyond
                go-live, offering continuous support, system optimization, and
                performance monitoring to ensure our clients achieve maximum
                return on their IWMS investments. By combining technical
                excellence with a client-first mindset, we help organizations
                create more efficient, compliant, and responsive workplace
                environments.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="relative w-full aspect-5/3 overflow-hidden rounded-md">
                <CustomImage
                  src="/images/about2.jpg"
                  alt="Team collaboration"
                  width={300}
                  height={260}
                  className="object-cover w-full aspect-5/3 rounded-md"
                />
              </div>
              <div className="relative w-full aspect-5/3 overflow-hidden rounded-md">
                <CustomImage
                  src="/images/about3.jpg"
                  alt="Team meeting"
                  width={466}
                  height={260}
                  className="object-cover w-full aspect-5/3 rounded-md"
                />
              </div>
              <div className="relative overflow-hidden w-full aspect-5/3 rounded-md sm:col-span-2">
                <CustomImage
                  src="/images/about5.jpg"
                  alt="Team workspace"
                  width={796}
                  height={410}
                  className="object-cover w-full aspect-5/3 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#0f66a6] py-8 text-white">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold">15+</h3>
              <h6 className="mt-2 text-base text-white">Years Experience</h6>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <h6 className="mt-2 text-base text-white">Successful Projects</h6>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">50+</h3>
              <h6 className="mt-2 text-base text-white">Expert Team</h6>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">99%</h3>
              <h6 className="mt-2 text-base text-white">Client Satisfaction</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-3 text-base text-slate-600">
                To empower organizations by delivering innovative IWMS solutions
                that streamline operations, enhance productivity, and create
                sustainable workplace environments. We partner with our clients
                to transform facility management into a strategic business
                advantage.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-3 text-base text-slate-600">
                To be the leading provider of integrated workplace management
                solutions, recognized globally for our expertise, innovation,
                and commitment to customer success. We envision a world where
                technology and people work together seamlessly to optimize
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="w-full bg-slate-50 py-12">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Core Strengths
            </h2>
            <p className="mt-2 text-base text-slate-600">
              The foundation of our success rests on these core competencies
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-md bg-white p-6 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">IWMS Expertise</h3>
              <p className="mt-2 text-sm text-slate-600">
                Deep technical and functional knowledge of leading IWMS
                platforms
              </p>
            </div>
            <div className="rounded-md bg-white p-6 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">
                Certified Expertise
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Industry-recognized certifications and continuous professional
                development
              </p>
            </div>
            <div className="rounded-md bg-white p-6 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">Smart Technology</h3>
              <p className="mt-2 text-sm text-slate-600">
                Integration with IoT, analytics, and automation for intelligent
                operations
              </p>
            </div>
            <div className="rounded-md bg-white p-6 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">Trust & Security</h3>
              <p className="mt-2 text-sm text-slate-600">
                Enterprise-grade security and compliance with industry standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Certifications
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Industry recognition and compliance certifications
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                ISO 27001 Certified
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Information Security Management
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                IBM Maximo Certified Specialist
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Enterprise asset management platform
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                IBM TRIRIGA Certified Consultant
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Real estate and facilities management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="w-full bg-slate-50 py-12">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Expertise</h2>
            <p className="mt-2 text-base text-slate-600">
              Specialized skills across key domains
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-md bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                Maximo Partner Certification
              </h3>
            </div>
            <div className="rounded-md bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                ITIL Service Management
              </h3>
            </div>
            <div className="rounded-md bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">
                Certified Energy Manager (CEM)
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
