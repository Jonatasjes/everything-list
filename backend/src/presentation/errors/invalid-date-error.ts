export class InvalidDateError extends Error {
  constructor() {
    super(`Invalid format. The date format must be YYYY/MM/DD`)
    this.name = 'InvalidDateError'
  }
}
