import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <section className="w-full max-w-2xl text-center">
        <p className="text-primary text-sm md:text-base font-semibold tracking-wider mb-3">
          ERROR 404
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-8">
          Sorry, the page you are looking for does not exist or may have been moved.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
