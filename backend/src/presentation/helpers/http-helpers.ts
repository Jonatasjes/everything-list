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
