export interface HttpRequest {
  query?: any
  params?: any
  body: any
  user?: HttpUser
}

export interface HttpResponse {
  statusCode: number
  body: any
}

interface HttpUser {
  id: string
  username: string
  name: string
  email: string
}
