import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './Plan';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @OneToMany(
    () => Plan,
    plan => plan.user,
  )
  @JoinColumn()
  plans: Plan[];
}
