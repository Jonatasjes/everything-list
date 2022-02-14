import { Validation } from './validation'

export class ValidationComposite implements Validation {
  private readonly requiredFieldsValidation: Validation
  constructor(requiredFieldsValidation: Validation) {
    this.requiredFieldsValidation = requiredFieldsValidation
  }
  validate(input: any): Error {
    const error = this.requiredFieldsValidation.validate(input)
    if (error) {
      return error
    }
  }
}
