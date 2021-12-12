import {Entity, OneToMany} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm/browser";
import WasteTypes from "./wasteTypes";
import {Max, Min} from "class-validator";
import {ILeafInfo} from "./interfaces";

@Entity()
export default class LeafInfo implements ILeafInfo{
	@PrimaryGeneratedColumn()
	coordinate_id!: number;

	@Column()
	latitude!: string;

	@Column()
	longitude!: string;

	@Column()
	wasteTypes!: string[];  // bottle , battery

	@Column()
	paymentCondition!: string; // paid free of condition

	@Column({})
	@Min(0)
	@Max(10)
	rating!: number;

	@Column({nullable: true})
	deliveryOptions!: string[];

	@OneToMany(() => WasteTypes, wasteTypes => wasteTypes.leafInfo, {cascade: true, eager: true})
	wasteType!: WasteTypes[];
}