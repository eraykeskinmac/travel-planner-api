import { User } from './../database/entities/User';
import { AppDataSource } from './../database/index';
import { hashPassword } from './../utils/helpers/index';
import { CreateUserParams } from './../utils/types/index';

const userRepository = AppDataSource.getRepository(User);
export const createUser = async (params: CreateUserParams) => {
  const userDB = await userRepository.findOneBy({ username: params.username });

  if (userDB) {
    throw new Error('User already exists');
  }
  params.password = await hashPassword(params.password);
  const newUser = userRepository.create(params);
  return userRepository.save(newUser);
};
