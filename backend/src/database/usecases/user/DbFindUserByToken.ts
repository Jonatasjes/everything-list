import { IDecrypter } from '@database/protocols/cryptography/IDecrypter'
import { IFindUserByToken } from '@database/protocols/user/IUsersRepository'
import { IUser } from '@domain/models/user/IUser'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'

export class DbFindUserByToken implements IFindUserByToken {
  private readonly decrypter: IDecrypter
  private readonly findByEmail: IFindByEmail

  constructor(decrypter: IDecrypter, findByEmail: IFindByEmail) {
    this.decrypter = decrypter
    this.findByEmail = findByEmail
  }

  async findByToken(token: string): Promise<IUser> {
    const email = await this.decrypter.decrypt(token)
    if (email) {
      const user = await this.findByEmail.findByEmail(email)

      if (user) {
        return user
      }
    }

    return null
  }
}
