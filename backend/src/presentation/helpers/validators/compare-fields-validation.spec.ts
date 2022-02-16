import { InvalidParamError } from '../../errors/invalid-param-error'
import { HttpRequest } from '../../protocols/http'
import { CompareFieldsValidation } from './compare-fields-validation'
import { Validation } from './validation'

const makeHttpRequest = (missingField?: string): HttpRequest => {
  const body = {
    username: 'any_username',
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
    passwordConfirmation: 'any_passwordConfimation',
  }
  if (missingField) {
    delete body[missingField]
  }

  return {
    body,
  }
}

interface SutTypes {
  sut: Validation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldsValidation('password', 'passwordConfirmation')
  return {
    sut,
  }
}

describe('Compare Fields Validation', () => {
  test('Should retrurn invalid param error if password is not equal to passwordConfirmation', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest().body)
    expect(error).toEqual(new InvalidParamError('passwordConfirmation'))
  })

  test('Should void if password is equal to passwordConfirmation', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        username: 'any_username',
        name: 'any_name',
        email: 'any_email',
        password: 'valid_password',
        passwordConfirmation: 'valid_password',
      },
    }
    const error = sut.validate(httpRequest.body)
    expect(error).toBeFalsy()
  })
})
