import bcrypt from 'bcrypt'
import { IEncrypter } from '@database/protocols/cryptography/IEncrypter'
import { IHashComparer } from '@database/protocols/cryptography/IHashComparer'

export class BcryptAdapter implements IEncrypter, IHashComparer {
  private readonly salt: number
  constructor(salt: number) {
    this.salt = salt
  }
  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare(password: string, passwordHash: string): Promise<boolean> {
    const passwordIsValid = await bcrypt.compare(password, passwordHash)
    return passwordIsValid
  }
}
