export enum STATUS_RESPONSE {
  SUCCESS = "success",
  ERROR = "error",
}
export enum STATUS_RESPONSE_CODE {
  ERROR = 400,
  SUCCESS = 200,
}
export interface SELECT_PARAM_STAR {
  label: string;
  value: string;
}
export enum ORDER_DIRECTION {
  ASC = "ASC",
  DESC = "DESC",
  NO = "",
}
export enum STATUS_ACCOUNT {
  ACTIVE = 'active',
  IN_ACTIVE = 'inactive',
}
