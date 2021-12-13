
import {ConnectionOptions} from "typeorm";
import dotenv from "dotenv";
import {LeafInfo} from "./entity/LeafInfo";
dotenv.config();

const config: ConnectionOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST || 'localhost',
	port: Number(process.env.POSTGRES_PORT) || 5432,
	username: process.env.POSTGRES_USERNAME || "postgres",
	password: process.env.POSTGRES_PASSWORD || "postgres",
	database: process.env.POSTGRES_DB || "pg_data",
	entities: [LeafInfo],
	ssl:{rejectUnauthorized:true},
	migrations: [],
	cli: {},
	logging: true,
	synchronize: true,
}
export default config;