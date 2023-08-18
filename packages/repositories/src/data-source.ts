import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgresql://retool:Ngv4rBUI9TaH@ep-green-tree-55728945.us-west-2.retooldb.com/retool?sslmode=require",
    port: 5432,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
