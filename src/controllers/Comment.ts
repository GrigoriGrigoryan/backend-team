import {NextFunction, Request, Response} from "express";
import comment from "../services/comment";
import {ExceptionMessages, HttpErr} from "../exceptions";
import StatusCode from "../exceptions/statusCodes";

class Comment {
	public async createComment(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await comment.create(req.body)
			res.status(StatusCode.CreateRequest).json(data);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};
	public async getComment(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await comment.getAll();
			res.status(StatusCode.SuccessRequest).json(data);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};
	public async getCommentById(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await comment.getOne(req.params.id);
			if (!data) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
			}
			res.status(StatusCode.SuccessRequest).json(data);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};

	public async updateComment(req: Request, res: Response, next: NextFunction) {
		try {
			const updatedData = await comment.update(req.params.id, req.body)
			if (!updatedData) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
			}
			res.status(StatusCode.SuccessRequest).json(updatedData);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};

	public async deleteComment(req: Request, res: Response, next: NextFunction) {
		try {
			const deletedData = await comment.deleteComment(req.params.id);
			if (!deletedData) {
				next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.COMMENT));
			}
			res.status(StatusCode.SuccessRequest).json(deletedData);
		} catch (err) {
			next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
		}
	};
}

export const CommentController = new Comment();