export class TaskStatusError extends Error {
  constructor() {
    super(`The Status must be NEW, IN_PROGRESS, STOPED or COMPLETED`)
    this.name = 'TaskStatusError'
  }
}
