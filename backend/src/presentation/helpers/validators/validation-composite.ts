import { Validation } from './validation'

export class ValidationComposite implements Validation {
  private readonly requiredFieldsValidation: Validation
  private readonly emailValidation: Validation
  private readonly compareFieldsValidation: Validation
  constructor(requiredFieldsValidation: Validation, emailValidation: Validation, compareFieldsValidation: Validation) {
    this.requiredFieldsValidation = requiredFieldsValidation
    this.emailValidation = emailValidation
    this.compareFieldsValidation = compareFieldsValidation
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
    const errorCompare = this.compareFieldsValidation.validate(input)
    if (errorCompare) {
      return errorCompare
    }
  }
}
