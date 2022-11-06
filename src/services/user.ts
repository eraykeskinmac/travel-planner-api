import { User } from '../database/entities';
import { FindUserOptions, FindUserParams } from '../utils/types';
import { UserRepository } from './../database/repositories/index';
import { getUserSelections } from './../utils/helpers/index';

export const findUser = (
  params: FindUserParams,
  options?: FindUserOptions,
): Promise<User | null> => {
  const select = getUserSelections(options?.selectAll);
  return UserRepository.findOne({ where: params, select, relations: options?.relations });
};
