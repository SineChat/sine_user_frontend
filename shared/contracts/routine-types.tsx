import { BaseResult } from "./shared-types";

export interface SubscriptionType {
    id: string
    subscription_type: string
    description: string
    price: number
    currency_code: string
    created_at: string
    updated_at: string
}
export interface SubOutput extends BaseResult {
    data: SubscriptionType
}