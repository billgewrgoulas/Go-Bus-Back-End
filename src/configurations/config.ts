import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config();

export const DBconnectionProperties: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
    schema: process.env.DB_SCHEMA
};

export const jwtConstants = {
    secret: process.env.AUTH_KEY,
};