export enum Status {
  NEW,
  IN_PROGRESS,
  STOPED,
  COMPLETED,
}

export interface ITask {
  id: string
  status: Status
  message: string
  created_at: Date
  updated_at: Date
  userId: string
}
