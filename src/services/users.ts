import * as UserModel from "../models/User";

export interface InputUser {
  email: string;
  password: string;
}

export interface User extends InputUser {
  id: number;
}

export const create = async (user: InputUser): Promise<User> => {
  const createdUser = await UserModel.create(user);
  console.log(user);
  return createdUser;
};
