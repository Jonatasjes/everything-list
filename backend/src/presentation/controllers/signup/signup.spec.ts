import { MissingParamError } from '../../errors/missing-param-error'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 is if no username is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfimation: 'any_passwordConfimation',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('username'))
  })
})
