'use client";';
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

const IWMsSolution = () => {
  const { data } = useFeatures();
  const featureSection = (data as FeaturesResponse | undefined)?.data?.[1];

  const items =
    featureSection?.items
      ?.slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) ?? [];

  return (
    <section className="w-full bg-primary my-12 md:my-20 py-15 text-white">
      <div className="mx-auto w-full container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl mb-2 font-bold leading-[150%]">
            {featureSection?.title || "IWMS Solutions"}
          </h3>
          <h5 className="mt-1 text-xl leading-[120%] font-normal text-white">
            {featureSection?.subtitle ||
              "Comprehensive use cases for modern workplace management"}
          </h5>
        </div>

        <div className="mt-8 md:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={`${item.order}-${item.title}`}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center p-4 rounded-full bg-white text-[#0f66a6]">
                <CustomImage
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="mt-4 text-2xl leading-[120%] font-semibold">
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

export default IWMsSolution;
