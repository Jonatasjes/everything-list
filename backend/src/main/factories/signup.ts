import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AppPostgreDataSource } from '../../infra/database/postrgre-typeorm/data-source'
import { AccountPostgreRepository } from '../../infra/database/postrgre-typeorm/repositories/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { CompareFieldsValidation } from '../../presentation/helpers/validators/compare-fields-validation'
import { EmailValidation } from '../../presentation/helpers/validators/email-validation'
import { RequiredFieldsValidation } from '../../presentation/helpers/validators/required-fields-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

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
  const accountPostgreRepository = new AccountPostgreRepository(AppPostgreDataSource)
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountPostgreRepository)
  return new SignUpController(validation, dbAddAccount)
}
