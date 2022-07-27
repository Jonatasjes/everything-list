import { IHashComparer } from '@database/protocols/cryptography/IHashComparer'
import {
  IAuthentication,
  IAuthenticationParams,
  IAuthenticationResult,
} from '@domain/usecases/user/IAuthentication'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'
import { IEncrypter } from '@database/protocols/cryptography/IEncrypter'

export class DbAuthentication implements IAuthentication {
  private readonly findByEmail: IFindByEmail
  private readonly hashComparer: IHashComparer
  private readonly encrypter: IEncrypter

  constructor(findByEmail: IFindByEmail, hashComparer: IHashComparer, encrypter: IEncrypter) {
    this.findByEmail = findByEmail
    this.hashComparer = hashComparer
    this.encrypter = encrypter
  }

  async auth(authenticationParams: IAuthenticationParams): Promise<IAuthenticationResult> {
    const user = await this.findByEmail.findByEmail(authenticationParams.email)

    if (user) {
      const passwordIsValid = await this.hashComparer.compare(
        authenticationParams.password,
        user.password,
      )

      if (passwordIsValid) {
        const accessToken = await this.encrypter.encrypt(user.email)

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          message: 'User authorized',
          accessToken: accessToken,
        }
      }
    }

    return null
  }
}
