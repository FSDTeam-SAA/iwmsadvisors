"use client";

import CustomImage from "@/components/shared/CustomImage";
import {
  useCertifications,
  useExpertise,
  useMission,
  useNumbers,
  useTranslations,
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

type TranslationItem = {
  _id?: string;
  title?: string;
  description?: string;
  image1?: string;
  image2?: string;
  image3?: string;
};

type NumberItem = {
  order: number;
  value: string;
  label: string;
};

const AboutTeam = () => {
  const { data: missionData } = useMission();
  const { data: visionData } = useVision();
  const { data: certificationsData } = useCertifications();
  const { data: translationsData } = useTranslations();
  const { data: expertiseData } = useExpertise();
  const { data: numbersData } = useNumbers();

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

  const translations: TranslationItem[] = Array.isArray(translationsData?.data)
    ? translationsData.data
    : translationsData?.data
      ? [translationsData.data]
      : [];
  const translation: TranslationItem | undefined = translations[0];

  const heroTitle =
    translation?.title || "Transforming Facility Management Through Technology";
  const heroDescription =
    translation?.description ||
    "IWMS Advisors delivers comprehensive workplace management solutions that combine industry expertise with cutting-edge technology. Our team of certified professionals brings decades of collective experience in implementing and optimizing Integrated Workplace Management Systems for organizations worldwide.";
  const heroImage1 = translation?.image1 || "/images/about2.jpg";
  const heroImage2 = translation?.image2 || "/images/about3.jpg";
  const heroImage3 = translation?.image3 || "/images/about5.jpg";

  const statsItems = numbersData?.data?.items?.sort(
    (a: NumberItem, b: NumberItem) => (a.order || 0) - (b.order || 0),
  ) || [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Successful Projects" },
    { value: "50+", label: "Expert Team" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold text-primary">{heroTitle}</h1>
              <p className="mt-4 text-base text-[#4A5565]">{heroDescription}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="relative w-full aspect-5/3 overflow-hidden rounded-md">
                <CustomImage
                  src={heroImage1}
                  alt="Team collaboration"
                  width={300}
                  height={260}
                  className="object-cover w-full aspect-5/3 rounded-md"
                />
              </div>
              <div className="relative w-full aspect-5/3 overflow-hidden rounded-md">
                <CustomImage
                  src={heroImage2}
                  alt="Team meeting"
                  width={466}
                  height={260}
                  className="object-cover w-full aspect-5/3 rounded-md"
                />
              </div>
              <div className="relative overflow-hidden w-full aspect-5/3 rounded-md sm:col-span-2">
                <CustomImage
                  src={heroImage3}
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
            {statsItems.map((item: NumberItem, index: number) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold">{item.value}</h3>
                <h6 className="mt-2 text-base text-white">{item.label}</h6>
              </div>
            ))}
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
                      <CustomImage
                        src={mission.image}
                        alt={mission.title || "Mission image"}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    )}

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
                      <CustomImage
                        src={vision.image}
                        alt={vision.title || "Vision image"}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0f66a6]/10 text-[#0f66a6]">
                        <Briefcase className="h-5 w-5" />
                      </div>
                    )}

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
              No mission or vision content available.
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
