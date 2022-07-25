import { IUser } from '@domain/models/user/IUser'
import { ICreateUser, ICreateUserModel } from '@domain/usecases/user/ICreateUser'
import { IEncrypter } from '@database/protocols/cryptography/IEncrypter'
import { ICreateUserRepository } from '@database/protocols/user/IUsersRepository'

export class DbCreateUser implements ICreateUser {
  private readonly encrypter: IEncrypter
  private readonly createUserRepository: ICreateUserRepository
  constructor(encrypter: IEncrypter, createUserRepository: ICreateUserRepository) {
    this.encrypter = encrypter
    this.createUserRepository = createUserRepository
  }
  async create(userData: ICreateUserModel): Promise<IUser> {
    const hashedPassword = await this.encrypter.encrypt(userData.password)
    const user = await this.createUserRepository.create(
      Object.assign({}, userData, { password: hashedPassword }),
    )
    return user
  }
}
