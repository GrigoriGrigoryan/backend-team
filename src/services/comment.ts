import {getRepository} from "typeorm";
import {Comment} from "../entity/Comment";
import {LeafInfo} from "../entity/LeafInfo";

export default({
	async create(body: any) {
		if (!body) {
			throw `Bad request`
		}
		const id = body.id;
		const leafe = await getRepository(LeafInfo).findOne(id)
		if (!leafe) {
			return `Not Valid Leafe Id`
		}
		const comment = getRepository(Comment).create(body);
		return await getRepository(Comment).save(comment);
	},
	async getAll() {
		 const comments = await getRepository(Comment).find();
		 return comments;
	},
	async getOne(id: string | number) {
		const comment = await getRepository(Comment).findOne(id);
		if (!comment) {
			throw `Not found`
		}
		return comment;
	},
	async update(id: number | string, body: any) {
		if (!Number(id)) {
			throw `Bad request`
		}
		const comment = await getRepository(Comment).findOne(id);
		if (comment) {
			getRepository(Comment).merge(comment, body);
			return await getRepository(Comment).save(comment);
		}
	},
	async deleteComment(id: number | string) {
		if (!Number(id)) {
			throw `Bad request`;
		}
		const comment = await getRepository(Comment).findOne(id);
		if (comment) {
			return await getRepository(Comment).delete(id)
		}
		return `Bad request`;
	}
})