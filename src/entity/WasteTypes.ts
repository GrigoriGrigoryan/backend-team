// import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
// import LeafInfo from "./LeafInfo";
// import {IWasteTypes} from "./Interfaces";
//
// Entity()
// export default class WasteTypes implements IWasteTypes{
// 	@PrimaryGeneratedColumn()
// 	id!: number;
//
// 	@Column()
// 	coordinate_id!: number;
//
// 	@Column()
// 	wasteType!: string;
//
// 	@ManyToOne(() => LeafInfo, leafInfo => leafInfo.wasteTypes)
// 	@JoinColumn({name: 'coordinate_id'})
// 	leafInfo!: LeafInfo;
// }