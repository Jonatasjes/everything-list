import { MissingParamError } from '../../errors/missing-param-error'
import { Validation } from './validation'

export class RequiredFieldsValidation implements Validation {
  validate(input: any): Error {
    const requiredFields = ['username', 'name', 'email', 'password', 'passwordConfirmation']
    const missingField = requiredFields.filter(field => !input[field])
    if (missingField[0]) {
      return new MissingParamError(missingField[0])
    }
  }
}
