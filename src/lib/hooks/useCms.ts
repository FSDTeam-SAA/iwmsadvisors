"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAbout,
  getBanners,
  getCertifications,
  getExpertise,
  getFeatures,
  getFooter,
  getHero,
  getMission,
  getNumbers,
  getTranslations,
  // getServices,
  getVision,
} from "../api/cms";

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

export function useMission() {
  return useQuery({
    queryKey: ["mission"],
    queryFn: () => getMission(),
  });
}

export function useVision() {
  return useQuery({
    queryKey: ["vision"],
    queryFn: () => getVision(),
  });
}

export function useCertifications() {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: () => getCertifications(),
  });
}

export function useExpertise() {
  return useQuery({
    queryKey: ["expertise"],
    queryFn: () => getExpertise(),
  });
}

//server hero
export function useHero() {
  return useQuery({
    queryKey: ["hero"],
    queryFn: () => getHero(),
  });
}


// export transformation function for services

export function useTranslations() {
  return useQuery({
    queryKey: ["translations"],
    queryFn: () => getTranslations(),
  });
}

// use numbers
export function useNumbers() {
  return useQuery({
    queryKey: ["numbers"],
    queryFn: () => getNumbers(),
  });
}