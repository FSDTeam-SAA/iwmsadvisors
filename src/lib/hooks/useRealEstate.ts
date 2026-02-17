'use client';
import { useQuery } from "@tanstack/react-query";
import { getRealEstate } from "../api/api";

export function useRealEstate() {
  return useQuery({
    queryKey: ["real-estate"],
    queryFn: getRealEstate,
  });
}
