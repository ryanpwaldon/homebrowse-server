import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Subscriber {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  email: string
}
