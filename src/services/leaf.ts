import {getRepository} from "typeorm";
import {LeafInfo} from "../entity/LeafInfo";

export default ({
	async getAll() {
		const leafs = await getRepository(LeafInfo).find();
		return leafs;
	},
	async getOne(id: string | number) {
		if(!Number(id)) {
			throw `Bad request`;
		}
		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
			return leaf;
		}
		return `Not Found`;
	},
	async createLeaf(body: any) {
		if(!body) {
			throw `Bad Request`;
		}
	const leaf = getRepository(LeafInfo).create(body);

	return await getRepository(LeafInfo).save(leaf);
	},
	async updateLeaf(id: string | number, body: any) {
		if (!Number(id)) {
			throw `Bad request`
		}
		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
			 getRepository(LeafInfo).merge(leaf, body)
			return await getRepository(LeafInfo).save(leaf);
		}
		return `Not found`
	},
	async deleteLeaf(id: string | number) {
		if (!Number(id)) {
			throw `Bad request`
		}
		const leaf = await getRepository(LeafInfo).findOne(id);
		if (leaf) {
		return 	getRepository(LeafInfo).delete(id);
		}
		return `Not found`;
	}
})