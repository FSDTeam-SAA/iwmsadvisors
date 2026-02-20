"use client";

import { useMutation } from "@tanstack/react-query";
import { postBroadcastSubscribe } from "../api/api";

export function useBroadcastSubscribe() {
  return useMutation({
    mutationFn: (email: string) => postBroadcastSubscribe(email),
  });
}
