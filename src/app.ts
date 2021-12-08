import * as process from "process";
import express,  {Express} from "express";
import cors from "cors";
import morgan from 'morgan';
import compression from "compression";
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocs from './swagger/openapi.json';
import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 8888

export const getApplication = (): Express => {
	const app = express()
		.use(express.json())
		.use(cors({origin: `*`}))
		.use(morgan('tiny'))
		.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
		.use(compression());

	return  app;
};