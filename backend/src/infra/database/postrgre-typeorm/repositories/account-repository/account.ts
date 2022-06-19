import { DataSource } from 'typeorm'
import { AddAccountRepository } from '../../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../../domain/models/account'
import { AddAccountModel } from '../../../../../domain/usecases/add-account'

import { Account } from '../../entities/Account'

export class AccountPostgreRepository implements AddAccountRepository {
  private readonly appPostgreDataSource: DataSource

  constructor(appPostgreDataSource: DataSource) {
    this.appPostgreDataSource = appPostgreDataSource
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const result = await this.appPostgreDataSource
      .createQueryBuilder()
      .insert()
      .into(Account)
      .values([accountData])
      .execute()

    const account = await this.appPostgreDataSource
      .getRepository(Account)
      .createQueryBuilder('account')
      .where('account.id = :id', { id: result.identifiers[0].id })
      .getOne()

    return account
  }
}
