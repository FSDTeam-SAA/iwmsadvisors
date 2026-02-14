import Image from "next/image";
import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const CaseStudyCard = ({
  title,
  description,
  image,
  href = "#",
}: CaseStudyCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative h-32 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-3">
        <h3 className="text-xs font-semibold text-slate-900">{title}</h3>
        <p className="text-[11px] text-slate-600">{description}</p>
        <Link
          href={href}
          className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
        >
          View Case Studies →
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
