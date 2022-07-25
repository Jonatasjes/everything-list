import { IUser } from '@domain/models/user/IUser'
import { ITask } from '@domain/models/task/ITask'

export interface ICreateUserModel {
  username: string
  name: string
  email: string
  password: string
  tasks: ITask[]
}

export interface ICreateUser {
  create(user: ICreateUserModel): Promise<IUser>
}
