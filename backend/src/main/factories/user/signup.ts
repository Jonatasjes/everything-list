import { DbCreateUser } from '@database/usecases/User/DbCreateUser'
import { BcryptAdapter } from '@infra/criptography/BcryptAdapter'
import { AppPostgreDataSource } from '@main/database/data-source'
import { UserPostgreRepository } from '@infra/database/user/UserPostgresRepository'
import { SignUpController } from '@presentation/controllers/signup/SignupController'
import { CompareFieldsValidation } from '@presentation/helpers/validators/compare-fields-validation'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { RequiredFieldsValidation } from '@presentation/helpers/validators/required-fields-validation'
import { ValidationComposite } from '@presentation/helpers/validators/validation-composite'
import { EmailValidatorAdapter } from '@utils/email-validator-adapter'
import { DbFindByEmail } from '@database/usecases/user/DbFindByEmail'
import { DbFindByUsername } from '@database/usecases/user/DbFindByUsername'

export const makeSignupController = (): SignUpController => {
  const requiredFieldsValidation = new RequiredFieldsValidation()
  const emailValidation = new EmailValidation('email', new EmailValidatorAdapter())
  const compareFieldsValidation = new CompareFieldsValidation('password', 'passwordConfirmation')
  const validation = new ValidationComposite(
    requiredFieldsValidation,
    emailValidation,
    compareFieldsValidation,
  )
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const userPostgreRepository = new UserPostgreRepository(AppPostgreDataSource)
  const dbCreateUser = new DbCreateUser(bcryptAdapter, userPostgreRepository)
  const dbFindByEmail = new DbFindByEmail(userPostgreRepository)
  const dbFindByUsername = new DbFindByUsername(userPostgreRepository)
  return new SignUpController(validation, dbCreateUser, dbFindByEmail, dbFindByUsername)
}
