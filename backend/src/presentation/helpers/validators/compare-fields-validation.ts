import { InvalidParamError } from '../../errors/invalid-param-error'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldNameToCompare: string
  constructor(fieldName: string, fieldNameToCompare: string) {
    this.fieldName = fieldName
    this.fieldNameToCompare = fieldNameToCompare
  }

  validate(input: any): Error {
    console.log(input)
    console.log(this.fieldName)
    console.log(this.fieldNameToCompare)
    console.log(input[this.fieldName])
    console.log(input[this.fieldNameToCompare])

    if (input[this.fieldName] !== input[this.fieldNameToCompare]) {
      return new InvalidParamError(this.fieldNameToCompare)
    }
  }
}
