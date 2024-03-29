export enum Status {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  STOPPED = 'STOPPED',
  DONE = 'DONE',
}

export interface ITask {
  id: string
  status: Status
  name: string
  message: string
  hourEvent: string
  dateEvent: Date
  created_at: Date
  updated_at: Date
  userId: string
}
