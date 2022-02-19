import { AccountModel } from '../../domain/models/account'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: {
      type: error.name,
      message: error.message,
    },
  }
}

export const ok = (account: AccountModel): HttpResponse => {
  return {
    statusCode: 200,
    body: account,
  }
}
