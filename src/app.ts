import * as process from "process";
import express,  {Express, Response, Request} from "express";
import cors from "cors";
import morgan from 'morgan';
import compression from "compression";
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocs from './swagger/openapi.json';
import dotenv from 'dotenv';
import helmet from "helmet";
import {LeafRouter} from "./routes/leafs";
dotenv.config();

export const port = process.env.PORT || 8888

export const getApplication = (): Express => {
	const app = express()
		.use(express.json())
		.use(cors())
		.use(helmet())
		.use(morgan('tiny'))
		.use('/leaves', LeafRouter)
		.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
		.use(compression())
		.get('/', (req: Request, res: Response) => {
			//res.send(`Just greeting`)
			res.redirect('https://green-team001.herokuapp.com/api-docks');
		});

	return  app;
};
