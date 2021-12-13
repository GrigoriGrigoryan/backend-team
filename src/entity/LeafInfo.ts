import {Entity, OneToMany} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {Max, Min} from "class-validator";
import {ILeafInfo} from "./Interfaces";

@Entity("leaf")
export class LeafInfo {
	@PrimaryGeneratedColumn()
	coordinate_id!: number;

	@Column()
	ecoStationName!:string;

	@Column()
	latitude!: string;

	@Column()
	longitude!: string;

	@Column("simple-array")
	wasteTypes!: string[];  // bottle , battery

	@Column()
	paymentCondition!: string; // paid free of condition

	@Column({})
	@Min(0)
	@Max(10)
	rating!: number;

	@Column("simple-array",{


	})
	deliveryOptions!: string[];

	// @OneToMany(() => WasteTypes, wasteTypes => wasteTypes.leafInfo, {cascade: true, eager: true})
	// wasteType!: WasteTypes[];
}