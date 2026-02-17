
'use client';
import { useQuery } from "@tanstack/react-query";
import { getCaseStudies, getSingleCaseStudy } from "../api/api";

export function useCaseStudy() {
  return useQuery({
    queryKey: ["case-studies"],
    queryFn: getCaseStudies,
  });
}
export function useSingleCaseStudy(id: string) {
  return useQuery({
    queryKey: ["case-study", id],
    queryFn: () => getSingleCaseStudy(id),
  });
}

