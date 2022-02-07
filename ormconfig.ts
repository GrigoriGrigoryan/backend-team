import {ConnectionOptions} from "typeorm";
import dotenv from "dotenv";
import {LeafInfo} from "./src/entity";
import {Comment} from "./src/entity";
import path from "path";
dotenv.config();

const config: ConnectionOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST || 'localhost',
	port: Number(process.env.POSTGRES_PORT) || 5432,
	username: process.env.POSTGRES_USERNAME || "postgres",
	password: process.env.POSTGRES_PASSWORD || "postgres",
	database: process.env.POSTGRES_DB || "pg_data",
	entities: [LeafInfo, Comment],
	ssl:{rejectUnauthorized:true},
	migrationsRun: true,
	migrations:[
	  path.join(__dirname, "src/db/migrations/**/*.ts")
	],
	cli:{
	  migrationsDir:path.join(__dirname, "src/db/migrations"),
	  entitiesDir:path.join(__dirname, "src/entities")
	},
	logging: true,
	synchronize: false,
}

export default config;
