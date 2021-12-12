// import {Request, Response} from "express";
// import {leaf}  from '../services/index';
//
// class Leaf {
// 	public async getAllLeafs(req: Request, res: Response) {
// 		try {
// 			return await leaf.getLeafs();
// 		} catch (err) {
// 			res.send(err)
// 		}
// 	}
// }
//
// export const LeafController = new Leaf()

import {Response, Request} from "express";
import { leaf } from "../services"

class Leaf {
	public async getAllLeafs(req: Request, res: Response) {
		try {
			 return leaf.getAll();
		 } catch (err) {
			throw err;
		 }
	};
	public async getLeafById(req: Request, res: Response) {
		try {
			const paramId = req
			//leaf.getOne()
		} catch (err) {
			throw err;
		}
	}
	public async createLeafInfo() {}
	public async deleteLeaf() {}
}