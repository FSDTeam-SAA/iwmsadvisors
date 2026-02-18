"use client";
import { useQuery } from "@tanstack/react-query";
import { getFAQs, getSingleFAQ } from "../api/api";

export function useFAQs() {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => getFAQs(),
  });
}

export function useSingleFAQ(id: string) {
  return useQuery({
    queryKey: ["single-faq", id],
    queryFn: () => getSingleFAQ(id),
  });
}
