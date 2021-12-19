import {Entity, OneToMany, PrimaryGeneratedColumn, Column} from "typeorm";
import {Max, Min} from "class-validator";
import {ILeafInfo} from "./Interfaces";
import {Comment} from "./Comment";

@Entity("leaf")
export class LeafInfo implements ILeafInfo{
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({nullable: true})
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
	wasteTypes!: string[];

	@Column({nullable: true, type: "float"})
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

	@Column({nullable: true})
	rating_count!: number;

	@Column( "int",{nullable: true, array:true})
	rating_array!: number[];

	@Column("simple-array")
	workingHours!: string[]

	@OneToMany(() => Comment, comment => comment.leafInfo, {eager:true})
	comments!: Comment[];
}