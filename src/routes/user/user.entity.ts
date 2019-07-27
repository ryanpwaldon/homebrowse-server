import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'
import { IsNotEmpty, IsEmail } from 'class-validator'

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  @IsNotEmpty()
  name: string

  @Column({unique: true})
  @IsEmail()
  email: string

  @Column()
  @IsNotEmpty()
  password: string
}
