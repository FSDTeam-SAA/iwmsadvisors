import Image from "next/image";
import Link from "next/link";

type BlogArticlesCardProps = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  href?: string;
};

const BlogArticlesCard = ({
  title,
  excerpt,
  image,
  date,
  readTime,
  href = "#",
}: BlogArticlesCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative h-24 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 25vw"
        />
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{readTime}</span>
        </div>
        <h3 className="text-xs font-semibold text-slate-900">{title}</h3>
        <p className="text-[11px] text-slate-600">{excerpt}</p>
        <Link
          href={href}
          className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogArticlesCard;
