import { NextFunction, Request, Response } from "express";
import * as UsersService from "../services/users";
import { InputUser } from "../services/users";
import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // checa se deu bom
  const { error } = userSchema.validate(req.body);

  // deu ruim
  if (error) {
    next(error);
  }

  // deu bom
  next();
};

export const postUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body as InputUser;
  const user = await UsersService.create({ email, password });
  res.status(201).json(user);
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json([]);
};
