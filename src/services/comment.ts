import {getRepository} from "typeorm";
import {Comment} from "../entity";
import {LeafInfo} from "../entity";
import {rating} from "../utils/rating";


export default({
	async create(body: any) {
		const [id , rating_info] = [body.id, body.rating_info]
		const leaf = await getRepository(LeafInfo).findOne(id)
		if (!leaf) {
			return null;
		}
		if(rating_info) {
			if (!leaf.rating_array) {

				leaf.rating_array = [];

				await getRepository(LeafInfo).save(leaf)
			}
			if (!leaf.rating_count) {

				leaf.rating_count = 0;
				if (leaf.rating) {
					leaf.rating_count = 1
					leaf.rating_array = [leaf.rating]
					await getRepository(LeafInfo).save(leaf);
				}
			}

			if (leaf.rating_array.length >= 2) {

				leaf.rating_count = leaf.rating_array.length;
				leaf.rating_array	= [(leaf.rating_array.reduce((a, b) => a + b))];

				await getRepository(LeafInfo).save(leaf);
			}
			leaf.rating_array.push(rating_info);
			leaf.rating_count++;

			await getRepository(LeafInfo).save(leaf);
			const rate = rating(leaf.rating_array, leaf.rating_count);
			leaf.rating_array = [(leaf.rating_array.reduce((a, b) => a + b))];
			if (rate != leaf.rating) {
				leaf.rating = rate;
			}

			await getRepository(LeafInfo).save(leaf)
		}
		const comment =  getRepository(Comment).create(body);
		return getRepository(Comment).save(comment);
	},
	async getAll() {
		  return  await getRepository(Comment).find();
	},
	async getOne(id: string | number) {
		const comment = await getRepository(Comment).findOne(id);
		if (!comment) {
			return  null;
		}
		return comment;
	},
	async update(id: number | string, body: any) {
		const comment = await getRepository(Comment).findOne(id);
		if (comment) {
			getRepository(Comment).merge(comment, body);
			return  getRepository(Comment).save(comment);
		}
	},
	async deleteComment(id: number | string) {
		const comment = await getRepository(Comment).findOne(id);
		if (comment) {
			return  getRepository(Comment).delete(id)
		}
		return null;
	}
})