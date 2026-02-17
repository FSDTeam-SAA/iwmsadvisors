'use client';
import { useQuery } from "@tanstack/react-query";
import { getBlogs, getSingleBlog } from "../api/api";

export function useBlog(page: number = 1, limit: number = 8) {
  return useQuery({
    queryKey: ["blogs", page, limit],
    queryFn: () => getBlogs(page, limit),
  });
}

export function useSingleBlog(id: string) {
  return useQuery({
    queryKey: ["single-blog", id],
    queryFn: () => getSingleBlog(id),
  });
}