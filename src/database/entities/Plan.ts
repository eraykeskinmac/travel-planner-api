import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './Event';
import { User } from './User';

@Entity({
  name: 'plans',
})
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  title: string;

  @Column()
  desciption: string;

  @ManyToOne(
    () => User,
    user => user.createdPlans,
  )
  creator: User;

  @OneToMany(
    () => Event,
    event => event.plan,
  )
  @JoinColumn()
  events: Event[];

  @ManyToMany(
    () => User,
    user => user.plans,
  )
  users: User[];
}
