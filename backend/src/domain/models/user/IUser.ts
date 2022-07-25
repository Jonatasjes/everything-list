import { ITask } from '@domain/models/task/ITask'

export interface IUser {
  id: string
  username: string
  name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
  tasks: ITask[]
}
