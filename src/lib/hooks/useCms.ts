"use client";

import { useQuery } from "@tanstack/react-query";
import { getAbout, getBanners, getFeatures, getFooter } from "../api/cms";

export function useBanners() {
  return useQuery({
    queryKey: ["banners"],
    queryFn: () => getBanners(),
  });
}

export function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: () => getAbout(),
  });
}

//footer
export function useFooter() {
  return useQuery({
    queryKey: ["footer"],
    queryFn: () => getFooter(),
  });
}

// feature

export function useFeatures() {
  return useQuery({
    queryKey: ["features"],
    queryFn: () => getFeatures(),
  });
}