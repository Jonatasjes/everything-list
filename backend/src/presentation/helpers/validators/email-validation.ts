import { InvalidParamError } from '../../errors/invalid-param-error'
import { Validation } from './validation'
import { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidator: EmailValidator
  constructor(fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }
  validate(input: any): Error {
    const error = this.emailValidator.isValid(input)
    if (!error) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
