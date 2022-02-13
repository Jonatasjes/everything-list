import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helpers'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup'

const makeHttpRequest = (missingField: string): HttpRequest => {
  const body = {
    username: 'any_username',
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
    passwordConfimation: 'any_passwordConfimation',
  }
  if (missingField) {
    delete body[missingField]
  }

  return {
    body,
  }
}

interface SutTypes {
  sut: SignUpController
}

const makeSut = (): SutTypes => {
  const sut = new SignUpController()
  return { sut }
}

describe('SignUp Controller', () => {
  test('Should return 400 is if no username is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('username'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('username')))
  })

  test('Should return 400 is if no name is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('name'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('name')))
  })

  test('Should return 400 is if no email is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('email'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 is if no password is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('password'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
