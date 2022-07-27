export interface IAuthentication {
  auth: (authenticationParams: IAuthenticationParams) => Promise<IAuthenticationResult>
}

export interface IAuthenticationParams {
  email: string
  password: string
}

export interface IAuthenticationResult {
  id: string
  name: string
  username: string
  email: string
  message: string
  accessToken: string
}
