"use client";

import { useMutation } from "@tanstack/react-query";
import { postContact } from "../api/api";

export function usePostContact() {
  return useMutation({
    mutationFn: (formData: FormData) => postContact(formData),
  });
}
