import { IPaginationParams } from './common'

export interface IBaseUser {
  user_id: number
  user_name: string
}
export interface IUser extends IBaseUser {
  password?: string
  user_avatar?: string
}

export interface IRegisterParams {
  user_name: string
  password: string
}

export interface IGetUserListParams extends IPaginationParams {
  keyword: string
}
