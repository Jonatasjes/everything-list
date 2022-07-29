export interface IDeleteTask {
  delete(taskId: string): Promise<void>
}
