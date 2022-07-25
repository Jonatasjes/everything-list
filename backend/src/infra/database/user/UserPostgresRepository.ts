import { DataSource } from 'typeorm'
import { User } from '@main/database/models/User'
import { IUser } from '@domain/models/user/IUser'
import { ICreateUserModel } from '@domain/usecases/user/ICreateUser'
import {
  ICreateUserRepository,
  IFindByEmailRepository,
} from '@database/protocols/user/IUsersRepository'

export class UserPostgreRepository implements ICreateUserRepository, IFindByEmailRepository {
  private readonly appPostgreDataSource: DataSource

  constructor(appPostgreDataSource: DataSource) {
    this.appPostgreDataSource = appPostgreDataSource
  }

  async create(userData: ICreateUserModel): Promise<IUser> {
    const result = await this.appPostgreDataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([userData])
      .execute()

    const user = await this.appPostgreDataSource
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.id = :id', { id: result.identifiers[0].id })
      .getOne()

    return user
  }

  async findByEmail(email: string): Promise<IUser> {
    const result = await this.appPostgreDataSource
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne()

    return result
  }
}
