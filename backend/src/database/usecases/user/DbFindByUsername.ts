import { IFindByUsernameRepository } from '@database/protocols/user/IUsersRepository'
import { IUser } from '@domain/models/user/IUser'
import { IFindByUsername } from '@domain/usecases/user/IFindByUsername'

export class DbFindByUsername implements IFindByUsername {
  private readonly findByUsernameRepository: IFindByUsernameRepository

  constructor(findByUsernameRepository: IFindByUsernameRepository) {
    this.findByUsernameRepository = findByUsernameRepository
  }

  async findByUsername(username: string): Promise<IUser> {
    const user = await this.findByUsernameRepository.findByUsername(username)
    return user
  }
}
