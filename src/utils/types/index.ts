import { FindOptionsRelationByString, FindOptionsRelations } from 'typeorm';
import { User } from '../../database/entities';

export type CreateUserParams = {
  username: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  username: string;
}>;

export type FindUserOptions = Partial<{
  selectAll: boolean;
  relations: FindOptionsRelationByString | FindOptionsRelations<User>;
}>;

export type CreatePlanParams = {
  title: string;
  description: string;
  date: string;
  creator: User;
};

export type GetPlansParams = {
  userId: number;
};
