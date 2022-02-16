import { Validation } from './validation'

export class ValidationComposite implements Validation {
  private readonly requiredFieldsValidation: Validation
  private readonly emailValidation: Validation
  constructor(requiredFieldsValidation: Validation, emailValidation: Validation) {
    this.requiredFieldsValidation = requiredFieldsValidation
    this.emailValidation = emailValidation
  }
  validate(input: any): Error {
    const errorField = this.requiredFieldsValidation.validate(input)
    if (errorField) {
      return errorField
    }
    const errorEmail = this.emailValidation.validate(input.email)
    if (errorEmail) {
      return errorEmail
    }
  }
}
