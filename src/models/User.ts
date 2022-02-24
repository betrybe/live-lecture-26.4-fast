import { ResultSetHeader, RowDataPacket } from "mysql2";
import { InputUser, User } from "../services/users";
import connection from "./connection";

export const findAll = async (): Promise<User[]> => {
  const [users] = await connection.execute<RowDataPacket[]>(
    "SELECT * FROM users"
  );
  return users as User[];
};

export const create = async (user: InputUser): Promise<User> => {
  const [result] = await connection.execute<ResultSetHeader>(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [user.email, user.password]
  );
  const created: User = {
    id: result.insertId,
    email: user.email,
    password: user.password,
  };
  return created;
};
