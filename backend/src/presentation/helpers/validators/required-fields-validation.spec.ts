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

describe('Required Fields Validation', () => {
  test('Should return a MissingParamError is if no username is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('username'))
    expect(error).toEqual(new MissingParamError('username'))
  })

  test('Should return 400 is if no name is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('name'))
    expect(error).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 is if no email is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('email'))
    expect(error).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 is if no password is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('password'))
    expect(error).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 is if no passwordConfirmation is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest('passwordConfirmation'))
    expect(error).toEqual(new MissingParamError('passwordConfirmation'))
  })

  test('Should undefined if all fields are provided', () => {
    const { sut } = makeSut()
    const error = sut.validate(makeHttpRequest())
    expect(error).toEqual(undefined)
  })
})
