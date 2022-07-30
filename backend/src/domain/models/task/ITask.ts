export enum Status {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  STOPED = 'STOPED',
  COMPLETED = 'COMPLETED',
}

export interface ITask {
  id: string
  status: string
  name: string
  message: string
  hourEvent: string
  dateEvent: Date
  created_at: Date
  updated_at: Date
  userId: string
}
