import { Manager } from "@/app/entity/manager.entity";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const myDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_HOST),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    charset: 'utf8mb4',
    extra: {
        charset:'utf8mb4_general_ci',
    },
    timezone: 'Asia/Seoul',
    logging: true,
    entities: [Manager],
    namingStrategy: new SnakeNamingStrategy(),    
});

