import { ITask, Status } from '@domain/models/task/ITask'

export interface IUpdateInputs {
  userId: string
  taskId: string
  message: string
  status: Status
}

export interface IUpdateTask {
  update(updateInputs: IUpdateInputs): Promise<ITask>
}
