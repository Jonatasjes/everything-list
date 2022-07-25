export interface IAuthentication {
  auth: (authenticationParams: IAuthenticationParams) => Promise<IAuthenticationResult>
}

export interface IAuthenticationParams {
  email: string
  password: string
}

export interface IAuthenticationResult {
  name: string
  message: string
  accessToken: string
}
