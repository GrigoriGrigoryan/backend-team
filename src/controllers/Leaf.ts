import {Response, Request, NextFunction} from "express";
import  leaf  from "../services/leaf"
import {ExceptionMessages, HttpErr} from "../exceptions";
import StatusCode from "../exceptions/statusCodes";

class Leaf {
	public async getAllLeaves(req: Request, res: Response, next: NextFunction) {
		try {
			 const data = await leaf.getAll();
			 res.status(StatusCode.SuccessRequest).json(data);
		 } catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		 }
	};
	public async getLeafById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id
			const data = await leaf.getOne(id);
			if (!data) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.LEAF));
			}
			res.status(StatusCode.SuccessRequest).json(data);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	}
	public async createLeafInfo(req: Request, res: Response, next: NextFunction) {
		try {
			const body = req.body;
			const data = await leaf.createLeaf(body);
			res.status(StatusCode.CreateRequest).json(data);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};
	public async updateLeaf(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;
			const body = req.body;
			const updateData = await leaf.updateLeaf(id, body);
			if (!updateData) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.LEAF));
			}
			res.status(StatusCode.SuccessRequest).json(updateData);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	} ;
	public async deleteLeaf(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;
			const deletedData = await leaf.deleteLeaf(id);
			if (!deletedData) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.LEAF));
			}
			res.status(StatusCode.SuccessRequest).json(deletedData);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};
}

export const LeafController = new Leaf();