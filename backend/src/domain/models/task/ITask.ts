export enum Status {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  STOPED = 'STOPED',
  COMPLETED = 'COMPLETED',
}

export interface ITask {
  id: string
  status: Status
  message: string
  created_at: Date
  updated_at: Date
  userId: string
}
