import {getRepository} from "typeorm";
import {Comment} from "../entity/Comment";
import {LeafInfo} from "../entity/LeafInfo";
import {rating} from "../utils/rating";


export default({
	async create(body: any) {
		if (!body) {
			throw `Bad request`
		}
		const [id , rating_info] = [body.id, body.rating_info]

		const leafe = await getRepository(LeafInfo).findOne(id)
		if (!leafe) {
			return `Not Valid Leafe Id`
		}
		if(rating_info) {
			if (!leafe.rating_array) {
				leafe.rating_array = [];
				await getRepository(LeafInfo).save(leafe)
			}
			leafe.rating_array.push(rating_info);
			console.log(leafe.rating_array)
			await getRepository(LeafInfo).save(leafe)
			const rate = rating(leafe.rating_array);
			if (rate != leafe.rating) {
				leafe.rating = rate;
				await getRepository(LeafInfo).save(leafe)
			}
		}
		const comment =  getRepository(Comment).create(body);
		return getRepository(Comment).save(comment);
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
			return  getRepository(Comment).save(comment);
		}
	},
	async deleteComment(id: number | string) {
		if (!Number(id)) {
			throw `Bad request`;
		}
		const comment = await getRepository(Comment).findOne(id);
		if (comment) {
			return  getRepository(Comment).delete(id)
		}
		return `Bad request`;
	}
})