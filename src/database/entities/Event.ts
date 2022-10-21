import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './Plan';

@Entity({
  name: 'events',
})
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string; // '00:00', '00:30', '01:00'

  @Column()
  hour: number;

  @Column()
  title: string;

  @ManyToOne(
    () => Plan,
    plan => plan.events,
  )
  plan: Plan;
}
