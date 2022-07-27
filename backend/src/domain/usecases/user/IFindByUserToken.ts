import { IUser } from '@domain/models/user/IUser'

export interface IFindUserByToken {
  findByToken(token: string): Promise<IUser>
}
