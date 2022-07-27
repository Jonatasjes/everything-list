import { HttpResponse } from './http'

export interface AuthToken {
  headers: {
    authorization: string
  }
}

export interface Middleware {
  handle(httpRequest: AuthToken): Promise<HttpResponse>
}
