import { MissingParamError } from '../../errors/missing-param-error'
import { HttpRequest } from '../../protocols/http'
import { Validation } from './validation'

export class RequiredFieldsValidation implements Validation {
  validate(httpRequest: HttpRequest): Error {
    const requiredFields = ['username', 'name', 'email', 'password', 'passwordConfirmation']
    const missingField = requiredFields.filter(field => !httpRequest.body[field])
    if (missingField[0]) {
      return new MissingParamError(missingField[0])
    }
  }
}
