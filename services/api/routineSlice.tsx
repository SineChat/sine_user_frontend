"use client";

import { BaseResult, ErrorResult } from "@/shared/contracts/shared-types";
import { apiSlice } from "../apiSlice";
import * as ENDPOINT from "../constants";
import { SubOutput } from "@/shared/contracts/routine-types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscription: builder.query<SubOutput | ErrorResult, string | void >({
      query: (login) => ({
        url: `${ENDPOINT.GET_SUBSCRIPTION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        body: login,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetSubscriptionQuery,
} = authApiSlice;