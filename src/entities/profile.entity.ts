import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column()
  contact: number;

  @Column({ length: 50 })
  address: string;

  @Column({ length: 30 })
  email: string;
}
