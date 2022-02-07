import {body} from "express-validator";

const commentSchema = [
	body('id').notEmpty().isInt(),
	body('content').optional().isString(),
	body('rating_info').optional().isInt()
]

export default commentSchema;
