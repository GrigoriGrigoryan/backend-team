import {Request, Response} from "express";
import comment from "../services/comment";

class Comment {
	public async createComment(req: Request, res: Response) {
		try {
			const sendingData = await comment.create(req.body)
			return res.send(sendingData);
		} catch (err) {
			res.send(err)
		}
	};
	public async getComment(req: Request, res: Response) {
		try {
			const sendingData = await comment.getAll()
			return res.send(sendingData);
		} catch (err) {
			res.send(err)
		}
	};
	public async getCommentById(req: Request, res: Response) {
		try {
			const sendingData = await comment.getOne(req.params.id)
			return res.send(sendingData);
		} catch (err) {
			res.send(err)
		}
	};

	public async updateComment(req: Request, res: Response) {
		try {
			const sendingData = await comment.update(req.params.id, req.body)
			return res.send(sendingData);
		} catch (err) {
			res.send(err)
		}
	};

	public async deleteComment(req: Request, res: Response) {
		try {
			const sendingData = await comment.deleteComment(req.params.id)
			return res.send(sendingData);
		} catch (err) {
			res.send(err)
		}
	};
}

export const CommentController = new Comment();