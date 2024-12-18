import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/user";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "shipbridge",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [],
  subscribers: [],
});
