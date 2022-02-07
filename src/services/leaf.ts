import {getRepository} from "typeorm";
import {LeafInfo} from "../entity";
import {LeafDto} from "../dto";
import {UpdateLeafDto} from "../dto";

export default ({
	async getAll() {
		const leaves = await getRepository(LeafInfo).find();
		leaves.forEach((leaf) =>
		leaf.comments.sort((a, b) => a.comment_id - b.comment_id)
		)
		return leaves;
	},
	async getOne(id: string | number) {
		if(!Number(id)) {
			return null;
		}

		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
			leaf.comments.sort((a, b) => a.comment_id- b.comment_id);
			return leaf;
		}
		return null;
	},
	async createLeaf(body: LeafDto) {
		if(!body) {
			throw null;
		}
	const leaf = getRepository(LeafInfo).create(body);

	return await getRepository(LeafInfo).save(leaf);
	},
	async updateLeaf(id: string | number, body: UpdateLeafDto) {
		if (!Number(id)) {
			throw null;
		}
		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
			 getRepository(LeafInfo).merge(leaf, body)
			return await getRepository(LeafInfo).save(leaf);
		}
		return null
	},
	async deleteLeaf(id: string | number) {
		if (!Number(id)) {
			throw null;
		}
		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
		return 	getRepository(LeafInfo).delete(id);
		}
		return null;
	}
})