"use client";

import { BaseResult, ErrorResult } from "@/shared/contracts/shared-types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";
import { SigninInput, SigninResult, SignupInput, SignupResult, tokenInput, verifyInput } from "@/shared/contracts/auth-types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<SigninResult | ErrorResult, SigninInput>({
      query: (login) => ({
        url: `${ENDPOINT.LOGIN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: login,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    register: builder.query<
      SignupResult | ErrorResult,
      SignupInput
    >({
      query: (registration) => ({
        url: `${ENDPOINT.REGISTER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: registration,
      }),
    }),

    requestVerification: builder.mutation<
      BaseResult | ErrorResult,
      verifyInput
    >({
      query: (payload) => ({
        url: `${ENDPOINT.REQUEST_VERIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
    }),

    verifyToken: builder.mutation<
      BaseResult | ErrorResult,
      tokenInput
    >({
      query: (data) => ({
        url: `${ENDPOINT.VERIFY_TOKEN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: data,
      }),
    }),

    logout: builder.query<BaseResult | ErrorResult, void>({
      query: () => ({
        url: ENDPOINT.LOGOUT,
        headers: {
          Authorization: requestAuthorization(),
        },
        method: ENDPOINT.HTTP_METHODS.POST,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    fogetPassword: builder.mutation({
      query: (payload) => ({
        url: ENDPOINT.REQUEST_CHANGE_PASSWORD,
        body: payload ,
        method: ENDPOINT.HTTP_METHODS.POST,
      }),
    }),

    changePassword: builder.query({
      query: (payload) => ({
        url: ENDPOINT.CHANGE_PASSWORD,
        body: payload ,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
    }),

    resetPassword: builder.query({
      query: (payload) => ({
        url: ENDPOINT.RESET_PASSWORD,
        body: payload ,
        method: ENDPOINT.HTTP_METHODS.POST,
      }),
    }),

    updateUser: builder.query({
      query: (payload) => ({
        url: ENDPOINT.UPDATE_USER,
        body: payload ,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyLoginQuery,
  useLazyRegisterQuery,
  useLazyLogoutQuery,
  useLazyResetPasswordQuery,
  useRequestVerificationMutation,
  useVerifyTokenMutation,
  useFogetPasswordMutation,
  useLazyChangePasswordQuery,
  useLazyUpdateUserQuery
} = authApiSlice;