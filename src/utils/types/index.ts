import { Request } from "express";
import { User } from "../../database/entities";

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
}>;

