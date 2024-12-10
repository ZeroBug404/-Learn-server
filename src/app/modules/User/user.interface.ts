import { Model } from 'mongoose'
import { UserName } from '../../../interfaces/username'

export type IUser = {
  _id: string
  email: string
  name?: UserName
  phoneNumber?: string
  password: string
  role?: 'admin' | 'user'
  profileImg?: string
}

export type UserModel = {
  isUserExists(
    email: string
  ): Promise<Pick<IUser, '_id' | 'email' | 'phoneNumber' | 'password' | 'role'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>
} & Model<IUser>
