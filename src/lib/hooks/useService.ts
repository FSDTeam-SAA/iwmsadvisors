'use client';
import { useQuery } from "@tanstack/react-query";
import { getServices, getSingleServices } from "../api/api";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices, 
  });
}

export function useSingleService(id: string) {
  return useQuery({
    queryKey: ["single-service", id],
    queryFn: () => getSingleServices(id),
  });
}
