"use client";

import { useQuery } from "@tanstack/react-query";
import { getAbout, getBanners } from "../api/cms";

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
