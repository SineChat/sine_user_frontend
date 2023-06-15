import { BaseResult } from "./shared-types";

export interface SignupResult extends BaseResult {
    
}

export interface SigninResult extends BaseResult {
    data: {
        token: string;
        user: userPayload
    }
}

export interface SignupInput {
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    confirm_password: string,
    terms: boolean,
}

export interface SigninInput {
    email: string,
    password: string
}

export interface userPayload {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    country: string;
    created_at: string;
    updated_at: string;
}

export interface authUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    token: string;
    country?: string;
}

export interface verifyInput {
    email:string | string[] | undefined;
    redirect_url: string;
}

export interface tokenInput {
    token: number
}