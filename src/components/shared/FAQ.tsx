  "use client";
  import React, { useState } from "react";
  import { FAQCategory, FAQItem } from "@/lib/type/faq";
  import { ChevronDown } from "lucide-react";
  import { useFAQs } from "@/lib/hooks/useFaq";

  const FAQAccordion = () => {
    const { data } = useFAQs();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = (data?.data as FAQCategory[]) || [];

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    if (!categories || categories.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No FAQs available at the moment.
          </p>
        </div>
      );
    }

    // Flatten all items from all categories into a single list
    const items = categories.flatMap((category) => 
      category.items.map((item, idx) => ({
        ...item,
        _id: `${category._id}-${idx}`, 
        categoryTitle: category.title
      }))
    );

    return (
      <section className="my-12 md:my-20">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-3">
            Frequently Asked <span className="text-primary">Questions</span>
          </h3>
          <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
            Here are some of our FAQs. If you have any other questions, feel free
            to contact us.
          </p>

          <div className="w-full max-w-6xl mx-auto space-y-4">
            {items.map((faq, index: number) => (
              <div
                key={faq._id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex flex-col">
                    {/* {faq.categoryTitle && (
                      <span className="text-xs font-medium text-[#2B5AA6] uppercase mb-1">
                        {faq.categoryTitle}
                      </span>
                    )} */}
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-[#2B5AA6] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default FAQAccordion;
