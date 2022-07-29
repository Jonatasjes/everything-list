import jwt from 'jsonwebtoken'
import { IEncrypter } from '@database/protocols/cryptography/IEncrypter'
import { IDecrypter } from '@database/protocols/cryptography/IDecrypter'

export class JwtAdapter implements IEncrypter, IDecrypter {
  private readonly secret: string

  constructor(secret: string) {
    this.secret = secret
  }
  async encrypt(value: string): Promise<string> {
    const token = await jwt.sign({ payload: value }, this.secret, { expiresIn: '1h' })
    return token
  }

  async decrypt(value: string): Promise<string> {
    try {
      const result = (await jwt.verify(value, this.secret)) as any
      return result.payload
    } catch (error) {
      return null
    }
  }
}
