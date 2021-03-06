import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsJSON } from 'class-validator'

@Entity({ name: 'plans' })
export class PlanEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  @IsJSON()
  product: string // Can we use a proper json instead of a string?

  @Column('text')
  @IsJSON()
  prices: string

  @Column('text')
  @IsJSON()
  plan: string
}
