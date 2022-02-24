import Express, { json } from "express";
import usersRouter from "./routers/users";

const app = Express();

app.use(json());

app.get("/", (req, res) => res.send("hello world"));

app.use("/users", usersRouter);

export default app;
