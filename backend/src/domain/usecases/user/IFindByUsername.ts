import { IUser } from '@domain/models/user/IUser'

export interface IFindByUsername {
  findByUsername(username: string): Promise<IUser>
}
