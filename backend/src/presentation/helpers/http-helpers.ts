import { UnauthorizedError } from '@presentation/errors/unauthorized-error'
import { ServerError } from '@presentation/errors/server-error'
import { HttpResponse } from '@presentation/protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: {
      type: error.name,
      message: error.message,
    },
  }
}

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
})

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: data,
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: [],
  }
}

export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data,
  }
}
