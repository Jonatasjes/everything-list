import { InvalidParamError } from '../../errors/invalid-param-error'
import { Validation } from './validation'
import { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidatorAdapter: EmailValidator
  constructor(fieldName: string, emailValidatorAdapter: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidatorAdapter = emailValidatorAdapter
  }
  validate(input: any): Error {
    const isValid = this.emailValidatorAdapter.isValid(input)

    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
