import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helpers'
import { EmailValidation } from '../../helpers/validators/email-validation'
import { RequiredFieldsValidation } from '../../helpers/validators/required-fields-validation'
import { Validation } from '../../helpers/validators/validation'
import { ValidationComposite } from '../../helpers/validators/validation-composite'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup'

const makeHttpRequest = (missingField?: string): HttpRequest => {
  const body = {
    username: 'any_username',
    name: 'any_name',
    email: 'any_email@mail.com',
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
  sut: SignUpController
  validationCompositeStub: Validation
}

const makeSut = (): SutTypes => {
  const requiredFieldsValidationStub = new RequiredFieldsValidation()
  const emailValidatorAdapterStub = new EmailValidatorAdapter()
  const emailValidationStub = new EmailValidation('email', emailValidatorAdapterStub)
  const validationCompositeStub = new ValidationComposite(requiredFieldsValidationStub, emailValidationStub)
  const sut = new SignUpController(validationCompositeStub)
  return { sut, validationCompositeStub }
}

describe('SignUp Controller', () => {
  test('Should return 400 if no username is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('username'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('username')))
  })

  test('Should return 400 if no name is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('name'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('name')))
  })

  test('Should return 400 if no email is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('email'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no password is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('password'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should return 400 if no passwordConfirmation is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.handle(makeHttpRequest('passwordConfirmation'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('passwordConfirmation')))
  })

  test('Should return 400 if an invalid email is provided', () => {
    const { sut, validationCompositeStub } = makeSut()
    jest.spyOn(validationCompositeStub, 'validate').mockReturnValueOnce(new InvalidParamError('email'))
    const httpResponse = sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })
})
