export interface BaseResult {
  message: string;
  code: number;
  status: string;
  user_access?: number;
}

export interface ErrorResult extends BaseResult {
  data: null | undefined;
  error_code: number;
  [key: string]: any;
}
