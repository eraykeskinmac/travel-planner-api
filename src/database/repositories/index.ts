import { Session, User } from '../entities';
import { AppDataSource } from './../index';

export const UserRepository = AppDataSource.getRepository(User);
export const SessionRepository = AppDataSource.getRepository(Session);
