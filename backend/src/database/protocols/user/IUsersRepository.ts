import { IUser } from '@domain/models/user/IUser'
import { ICreateUserModel } from '@domain/usecases/user/ICreateUser'

export interface ICreateUserRepository {
  create(user: ICreateUserModel): Promise<IUser>
}

export interface IFindByEmailRepository {
  findByEmail(email: string): Promise<IUser>
}

export interface IFindUserByToken {
  findByToken(token: string): Promise<IUser>
}
