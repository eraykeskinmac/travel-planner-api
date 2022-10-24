import { User } from '../entities';
import { AppDataSource } from './../index';
export const UserRepository = AppDataSource.getRepository(User);
