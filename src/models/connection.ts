import mysql from "mysql2/promise";

export default mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  database: process.env.MYSQL_DATABASE,
});
