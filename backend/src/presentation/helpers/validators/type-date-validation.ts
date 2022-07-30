/* eslint-disable no-useless-escape */
import { InvalidDateError } from '@presentation/errors/invalid-date-error'
import { Validation } from './validation'

export class TypeDateValidation implements Validation {
  validate(input: any): Error {
    const test = /^(\d{4})\-(\d{2})\-(\d{2})$/.test(input)

    if (test) {
      const month = parseInt(input.split('-')[1])
      if (month < 13) {
        return undefined
      }
    }

    return new InvalidDateError()
  }
}
