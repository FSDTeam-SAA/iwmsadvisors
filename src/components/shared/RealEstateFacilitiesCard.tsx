import Image from "next/image";

type RealEstateFacilitiesCardProps = {
  title: string;
  image: string;
};

const RealEstateFacilitiesCard = ({
  title,
  image,
}: RealEstateFacilitiesCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900">
      <div className="relative h-36 w-full sm:h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="text-xs font-semibold text-white drop-shadow">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default RealEstateFacilitiesCard;
