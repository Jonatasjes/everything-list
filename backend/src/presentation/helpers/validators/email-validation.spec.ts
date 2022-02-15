import { InvalidParamError } from '../../errors/invalid-param-error'
import { EmailValidator } from '../../protocols/email-validator'
import { EmailValidation } from './email-validation'

const makeFakeEmailValidation = (): EmailValidator => {
  class EmailValidationStub implements EmailValidator {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isValid(email: string): boolean {
      return true
    }
  }
  return new EmailValidationStub()
}

interface SutTypes {
  sut: EmailValidation
  emailValidationStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidationStub = makeFakeEmailValidation()
  const sut = new EmailValidation('email', emailValidationStub)

  return {
    sut,
    emailValidationStub,
  }
}

describe('Email Validation', () => {
  test('Should return Invalid param error if an invalid email is provided', () => {
    const { sut, emailValidationStub } = makeSut()
    jest.spyOn(emailValidationStub, 'isValid').mockReturnValueOnce(false)
    const error = sut.validate('invalid_email@mail.com')
    expect(error).toEqual(new InvalidParamError('email'))
  })

  test('Should return void if a valid email is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate('valid_email@mail.com')
    expect(error).toBeFalsy()
  })
})
