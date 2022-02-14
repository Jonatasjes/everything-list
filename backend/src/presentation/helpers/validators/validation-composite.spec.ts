import { MissingParamError } from '../../errors/missing-param-error'
import { HttpRequest } from '../../protocols/http'
import { RequiredFieldsValidation } from './required-fields-validation'

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
  sut: RequiredFieldsValidation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldsValidation()
  return {
    sut,
  }
}

describe('Validation Composite', () => {
  test('Should return a MissingParamError is if no any field is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('username').body)
    expect(error).toEqual(new MissingParamError('username'))
  })

  test('Should undefined if all fields are provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest().body)
    expect(error).toEqual(undefined)
  })
})
