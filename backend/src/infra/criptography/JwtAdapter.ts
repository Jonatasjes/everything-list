import jwt from 'jsonwebtoken'
import { IEncrypter } from '@database/protocols/cryptography/IEncrypter'

export class JwtAdapter implements IEncrypter {
  private readonly secret: string

  constructor(secret: string) {
    this.secret = secret
  }
  async encrypt(value: string): Promise<string> {
    const token = await jwt.sign({ payload: value }, this.secret, { expiresIn: '1h' })
    return token
  }
}
