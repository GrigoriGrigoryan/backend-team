import {Response, Request} from "express";
import  leaf  from "../services/leaf"

class Leaf {
	public async getAllLeafs(req: Request, res: Response) {
		try {
			 const sendingData = await leaf.getAll();
			 res.send(sendingData);
		 } catch (err) {
			res.send(err);
		 }
	};
	public async getLeafById(req: Request, res: Response) {
		try {
			const id = req.params.id
			const sendingData = await leaf.getOne(id)
			res.send(sendingData);
		} catch (err) {
			res.send(err);
		}
	}
	public async createLeafInfo(req: Request, res: Response) {
		try {
			const body = req.body;
			const sendingData = await leaf.createLeaf(body);
			res.send(sendingData);
		} catch (err) {
			res.send(err);
		}
	};
	public async updateLeaf(req: Request, res: Response) {
		try {
			const id = req.params.id;
			const body = req.body;
			const sendingData = await leaf.updateLeaf(id, body);
			res.send(sendingData);
		} catch (err) {
			res.send(err);
		}
	} ;
	public async deleteLeaf(req: Request, res: Response) {
		try {
			const id = req.params.id;
			const sendingData = await leaf.deleteLeaf(id);
			res.send(sendingData);
		} catch (err) {
			res.send(err);
		}
	};
}

export const LeafController = new Leaf();