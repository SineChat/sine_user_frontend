// NB: Lifetime is in seconds
export enum CACHE_LIFETIME {
  DEFAULT = 0,
  TINY = 20,
  MEDIUM = 180,
  EXTENDED = 3600,
}

export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// auth

export const LOGIN = "/v1/login";
export const LOGOUT = "/v1/logout";
export const REGISTER = "/v1/signup";
export const CHANGE_PASSWORD = "/v1/password/change"
export const REQUEST_CHANGE_PASSWORD = "/v1/password/request-reset"
export const RESET_PASSWORD = "/v1/password/reset"
export const REQUEST_VERIFICATION = "/v1/email/request-verification"
export const VERIFY_TOKEN = "/v1/email/verify"
export const UPDATE_USER = "/v1/user/update"

// subscription

export const GET_SUBSCRIPTION = "v1/subscription/get"

