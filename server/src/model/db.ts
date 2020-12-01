import mysql from 'mysql2';
import 'dotenv/config';

const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
  })
  .promise();

const query = async (syntax: string, param: Array<any>) => {
  const [rows]: any = await db.query(syntax, param);

  return rows;
};
export { db, query };
