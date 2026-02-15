import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type OurServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const OurServiceCard = ({
  title,
  description,
  image,
  href = "#",
}: OurServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900">
      <div className="relative h-44 w-full sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h6 className="mt-1 text-base text-white">{description}</h6>
        <div className="mt-3">
          <Button
            asChild
            className="h-7 rounded-sm bg-transparent border-2 px-3 text-[10px] font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:border-white/80"
          >
            <Link href={href}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
