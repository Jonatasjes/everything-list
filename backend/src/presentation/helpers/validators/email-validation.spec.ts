import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { EmailValidator } from '../../protocols/email-validator'
import { EmailValidation } from './email-validation'

interface SutTypes {
  sut: EmailValidation
  emailValidatorAdapterStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidatorAdapterStub = new EmailValidatorAdapter()
  const sut = new EmailValidation('email', emailValidatorAdapterStub)

  return {
    sut,
    emailValidatorAdapterStub,
  }
}

describe('Email Validation', () => {
  test('Should return Invalid param error if an invalid email is provided', () => {
    const { sut, emailValidatorAdapterStub } = makeSut()
    jest.spyOn(emailValidatorAdapterStub, 'isValid').mockReturnValueOnce(false)
    const error = sut.validate('invalid_email@mail.com')
    expect(error).toEqual(new InvalidParamError('email'))
  })

  test('Should return void if a valid email is provided', () => {
    const { sut } = makeSut()
    const error = sut.validate('valid_email@mail.com')
    expect(error).toBeFalsy()
  })
})
