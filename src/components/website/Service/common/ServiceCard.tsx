import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const ServiceCard = ({
  title,
  description,
  image,
  href = "#",
}: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative w-full aspect-5/3">
        <Image
          src={image}
          alt={title}
          width={803}
          height={370}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute hidden group-hover:block bottom-8 left-6 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl leading-8 mb-2 font-bold">{title}</h3>
        <p className="text-sm text-white">{description}</p>
        <div className="mt-3">
          <Button
            asChild
            className="rounded-sm bg-transparent border-2 border-primary text-lg font-semibold leading-8 text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-transparent"
          >
            <Link href={href}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
