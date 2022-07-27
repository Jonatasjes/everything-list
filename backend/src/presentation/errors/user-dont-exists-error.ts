export class UserDontExistsError extends Error {
  constructor() {
    super(`User dont exists`)
    this.name = 'UserDontExistsError'
  }
}
