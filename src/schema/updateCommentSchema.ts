import {body} from "express-validator";

const updateCommentSchema = [
	body('content').isString(),
]

export default updateCommentSchema;