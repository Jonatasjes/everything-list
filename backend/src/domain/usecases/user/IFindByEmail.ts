import { IUser } from '@domain/models/user/IUser'

export interface IFindByEmail {
  findByEmail(email: string): Promise<IUser>
}
