import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { AccountModel } from '../../../../domain/models/account'

@Entity()
export class Account implements AccountModel {
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
}
