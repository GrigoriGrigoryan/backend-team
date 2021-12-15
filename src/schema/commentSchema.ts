import {body} from "express-validator";

const commentSchema = [
	body('id').isInt(),
	body('content').isString(),
]

export default commentSchema;