import {Router} from "express";
import {LeafController} from "../controllers";
import LeafDto from "../schema/leafSchema";
import UpdateLeafInfo from "../schema/updateLeafInfo"
import {validateRequestSchema} from "../middleware/validation";

export const LeafRouter = Router();

LeafRouter
	.post('/', LeafDto,validateRequestSchema,LeafController.createLeafInfo)
	.get('/', LeafController.getAllLeaves)
	.get('/:id', LeafController.getLeafById)
	.patch('/:id',UpdateLeafInfo,validateRequestSchema, LeafController.updateLeaf)
	.delete('/:id', LeafController.deleteLeaf);



