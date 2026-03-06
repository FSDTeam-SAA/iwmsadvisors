"use client";

import CustomImage from "@/components/shared/CustomImage";
import {
  useCertifications,
  useExpertise,
  useMission,
  useVision,
} from "@/lib/hooks/useCms";
import { Award, Briefcase, CheckCircle, Lock } from "lucide-react";

type SectionItem = {
  _id?: string;
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description?: string;
  image?: string;
};

const AboutTeam = () => {
  const { data: missionData } = useMission();
  const { data: visionData } = useVision();
  const { data: certificationsData } = useCertifications();
  const { data: expertiseData } = useExpertise();

  const missions: SectionItem[] = Array.isArray(missionData?.data)
    ? missionData.data
    : missionData?.data
      ? [missionData.data]
      : [];

  const visions: SectionItem[] = Array.isArray(visionData?.data)
    ? visionData.data
    : visionData?.data
      ? [visionData.data]
      : [];

  const mission: SectionItem | undefined = missions[0];
  const vision: SectionItem | undefined = visions[0];

  const certifications: SectionItem[] = Array.isArray(certificationsData?.data)
    ? certificationsData.data
    : certificationsData?.data
      ? [certificationsData.data]
      : [];

  const expertises: SectionItem[] = Array.isArray(expertiseData?.data)
    ? expertiseData.data
    : expertiseData?.data
      ? [expertiseData.data]
      : [];

  const certificationCards: string[] =
    certifications.length === 1
      ? [
          certifications[0]?.description1,
          certifications[0]?.description2,
          certifications[0]?.description3,
        ].filter((item): item is string => Boolean(item))
      : certifications
          .map((item) => item.title)
          .filter((item): item is string => Boolean(item))
          .slice(0, 3);

  const expertiseCards: string[] =
    expertises.length === 1
      ? [
          expertises[0]?.description1,
          expertises[0]?.description2,
          expertises[0]?.description3,
        ].filter((item): item is string => Boolean(item))
      : expertises
          .map((item) => item.title)
          .filter((item): item is string => Boolean(item))
          .slice(0, 3);

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
          {mission || vision ? (
            <div className="grid gap-8 md:grid-cols-2">
              {mission ? (
                <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-4">

                  {mission.image ? (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <CustomImage
                        src={mission.image}
                        alt={mission.title || "Mission image"}
                        width={800}
                        height={450}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className=" inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {mission.title}
                  </h3>
                  </div>
                  <p className="mt-3 text-base text-slate-600">
                    {mission.description}
                  </p>
                </div>
              ) : null}

              {vision ? (
                <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-4">

                  {vision.image ? (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <CustomImage
                        src={vision.image}
                        alt={vision.title || "Vision image"}
                        width={800}
                        height={450}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className=" inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {vision.title}
                  </h3>
                  </div>
                  <p className="mt-3 text-base text-slate-600">
                    {vision.description}
                  </p>
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-center text-base text-slate-500">
              You have not this section.
            </p>
          )}
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
          {certifications.length > 0 ? (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900">
                  Certifications
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  {certifications[0]?.subtitle}
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {certificationCards.map((text, index) => (
                  <div
                    key={`${text}-${index}`}
                    className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center"
                  >
                    <h3 className="font-semibold text-[#0f66a6]">{text}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-base text-slate-500">
              You have not this section.
            </p>
          )}
        </div>
      </section>

      {/* Expertise */}
      <section className="w-full  py-14 md:py-16">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          {expertises.length > 0 ? (
            <>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900">Expertise</h2>
                <p className="mt-2 text-sm text-slate-700">
                  {expertises[0]?.subtitle}
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {expertiseCards.map((text, index) => (
                  <div
                    key={`${text}-${index}`}
                    className="flex min-h-24 items-center justify-center rounded-md  px-6 py-7 text-center"
                  >
                    <h3 className="font-semibold text-[#0f66a6]">{text}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-base text-slate-500">
              You have not this section.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
