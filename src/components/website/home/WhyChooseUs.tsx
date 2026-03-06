"use client";

import CustomImage from "@/components/shared/CustomImage";
import { useFeatures } from "@/lib/hooks/useCms";

type FeatureItem = {
  order: number;
  icon: string;
  title: string;
  description: string;
};

type FeatureSection = {
  _id: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
};

type FeaturesResponse = {
  status: boolean;
  message: string;
  data: FeatureSection[];
};

const WhyChooseUs = () => {
  const { data } = useFeatures();
  const featureSection = (data as FeaturesResponse | undefined)?.data?.[0];

  const items =
    featureSection?.items
      ?.slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) ?? [];

  return (
    <section className="w-full bg-[#0D67A9] my-12 md:my-20 py-12 text-white">
      <div className="mx-auto w-full container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-4xl mb-2 font-bold leading-[150%]">
            {featureSection?.title || "Why Choose Us"}
          </h4>
          <h5 className="mt-1 text-xl leading-[120%] font-normal text-white">
            {featureSection?.subtitle ||
              "Your trusted partner for enterprise IWMS success"}
          </h5>
        </div>

        <div className="mt-8 md:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={`${item.order}-${item.title}`}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center p-4 rounded-full bg-[#3173a3] text-white">
                <CustomImage
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="mt-4 text-base leading-[120%] font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-normal leading-[120%] text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
