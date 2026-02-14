import BlogArticlesCard from "@/components/shared/BlogArticlesCard";

const BlogAndArticles = () => {
  const articles = [
    {
      title: "Choosing the Talent Badger",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, nibh elit at nibh, pellentesque ultricies faucibus…",
      image: "/images/service3.png",
      date: "14 Aug, 2025",
      readTime: "10 min read",
    },
    {
      title: "Choosing the Talent Badger",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, nibh elit at nibh, pellentesque ultricies faucibus…",
      image: "/images/service.png",
      date: "14 Aug, 2025",
      readTime: "10 min read",
    },
    {
      title: "Choosing the Talent Badger",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, nibh elit at nibh, pellentesque ultricies faucibus…",
      image: "/images/service2.png",
      date: "14 Aug, 2025",
      readTime: "10 min read",
    },
    {
      title: "Choosing the Talent Badger",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, nibh elit at nibh, pellentesque ultricies faucibus…",
      image: "/images/service.png",
      date: "14 Aug, 2025",
      readTime: "10 min read",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            Blog and Articles
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Proven success stories that showcase our expertise in workplace
            transformation and operational efficiency
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <BlogArticlesCard key={`${article.title}-${index}`} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAndArticles;
