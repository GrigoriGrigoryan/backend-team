import {Entity, OneToMany} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {Max, Min} from "class-validator";
import {ILeafInfo} from "./Interfaces";

@Entity("leaf")
export class LeafInfo implements ILeafInfo{
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	ecoStationName!:string;

	@Column()
	latitude!: string;

	@Column()
	longitude!: string;

	@Column()
	address!: string;

	@Column({nullable: true})
	addressRu!: string;

	@Column("simple-array")
	wasteTypes!: string[];  // bottle , battery

	// @Column()
	// paymentCondition!: string;
	//
	// @Column()
	// paymentConditionRu!: string;

	@Column({})
	@Min(0)
	@Max(5)
	rating!: number;

	@Column("simple-array")
	deliveryOptions!: string[];

	@Column("simple-array",{
		nullable:true
	})
	deliveryOptionsRu!: string[];

	@Column()
	contact!: string;

	@Column("simple-array")
	workingHours!: string[]

	// @OneToMany(() => WasteTypes, wasteTypes => wasteTypes.leafInfo, {cascade: true, eager: true})
	// wasteType!: WasteTypes[];
}