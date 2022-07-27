import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'

import { ITask, Status } from '@domain/models/task/ITask'
import { User } from './User'

@Entity()
export class Task implements ITask {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NEW,
  })
  status: Status

  @Column({
    type: 'varchar',
    length: 500,
  })
  message: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.tasks)
  userId: User['id']
}
