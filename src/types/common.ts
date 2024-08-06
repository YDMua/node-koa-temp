export type IKV = Record<string, any>

export interface IApiResponse<T> {
  data: T | null
  msg?: string
  code?: number
}

export interface IDecodedToken {
  user_id: string
  user_name: string
  [key: string]: any
}

export interface IPaginationParams {
  limit?: number
  offset?: number
  [key: string]: any
}

export interface IPaginationRes<T> {
  list: T[]
  total: number
}
