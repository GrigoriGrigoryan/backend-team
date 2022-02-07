import {Router} from "express";
import CommentSchema from "../schema/commentSchema";
import {CommentController} from "../controllers";
import UpdateCommentSchema from "../schema/updateCommentSchema";
import {validateRequestSchema} from "../middleware/validation";

export const CommentRouter = Router()

CommentRouter
		.post('/', CommentSchema, validateRequestSchema,CommentController.createComment)
		.get('/', CommentController.getComment)
		.get('/:id', CommentController.getCommentById)
		.patch('/:id', UpdateCommentSchema, validateRequestSchema,CommentController.updateComment)
		.delete('/:id', CommentController.deleteComment);
