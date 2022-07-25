import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'

import { IUser } from '@domain/models/user/IUser'
import { Task } from './Task'

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
  })
  username: string

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
  })
  email: string

  @Column({
    type: 'varchar',
    length: 150,
  })
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Task, Task => Task.userId)
  tasks: Task[]
}
