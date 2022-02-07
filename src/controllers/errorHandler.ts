import { Request, Response, NextFunction } from 'express';
import Exception from '../exceptions/exception';

export const errorHandler = (
	err: Exception,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	err.statusCode = err.statusCode || 500;

	res.status(err.statusCode).json({
		message: err.message,
	});
};