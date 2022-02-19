import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helpers'
import { CompareFieldsValidation } from '../../helpers/validators/compare-fields-validation'
import { EmailValidation } from '../../helpers/validators/email-validation'
import { RequiredFieldsValidation } from '../../helpers/validators/required-fields-validation'
import { ValidationComposite } from '../../helpers/validators/validation-composite'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup'

const makeHttpRequest = (missingField?: string): HttpRequest => {
  const body = {
    username: 'any_username',
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password',
    passwordConfirmation: 'any_password',
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
  const requiredFieldsValidationStub = new RequiredFieldsValidation()
  const emailValidatorAdapterStub = new EmailValidatorAdapter()
  const emailValidationStub = new EmailValidation('email', emailValidatorAdapterStub)
  const compareFieldsValidation = new CompareFieldsValidation('password', 'passwordConfirmation')
  const validationCompositeStub = new ValidationComposite(
    requiredFieldsValidationStub,
    emailValidationStub,
    compareFieldsValidation,
  )
  const sut = new SignUpController(validationCompositeStub)
  return { sut }
}

describe('SignUp Controller', () => {
  test('Should return 400 if no username is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest('username'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('username')))
  })

  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest('name'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('name')))
  })

  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest('email'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest('password'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should return 400 if no passwordConfirmation is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest('passwordConfirmation'))
    expect(httpResponse).toEqual(badRequest(new MissingParamError('passwordConfirmation')))
  })

  test('Should return 400 if an invalid email is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        username: 'any_username',
        name: 'any_name',
        email: 'invalid_email',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('Should return void if a valid email is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toBeFalsy()
  })

  test('Should return 400 if CompareFieldsValidation throws', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        username: 'any_username',
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'invalid_password',
        passwordConfirmation: 'invalid_passwordConfirmation',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('passwordConfirmation')))
  })

  test('Should return void if CompareFieldsValidation success', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        username: 'any_username',
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toBeFalsy()
  })
})
