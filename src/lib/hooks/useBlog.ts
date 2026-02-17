'use client';
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/api";

export function useBlog() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
}
