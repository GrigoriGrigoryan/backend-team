import express, {Router} from "express";
import {LeafController} from "../controllers/Leaf";

export const LeafRouter = Router();

LeafRouter
	.post('/', LeafController.createLeafInfo)
	.get('/', LeafController.getAllLeafs)
	.get('/:id', LeafController.getLeafById)
	.patch('/:id', LeafController.updateLeaf)
	.delete('/:id', LeafController.deleteLeaf);



