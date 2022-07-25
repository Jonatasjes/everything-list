import { IFindByEmailRepository } from '@database/protocols/user/IUsersRepository'
import { IUser } from '@domain/models/user/IUser'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'

export class DbFindByEmail implements IFindByEmail {
  private readonly findByEmailRepository: IFindByEmailRepository

  constructor(findByEmailRepository: IFindByEmailRepository) {
    this.findByEmailRepository = findByEmailRepository
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.findByEmailRepository.findByEmail(email)
    return user
  }
}
