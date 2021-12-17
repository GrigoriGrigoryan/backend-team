import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IComment} from "./Interfaces";
import {LeafInfo} from "./LeafInfo";

@Entity()
export class Comment implements IComment{
	@PrimaryGeneratedColumn()
	comment_id!: number;

	@Column()
	id!: number;

	@Column({nullable: true})
	content!: string;

	@Column( {nullable: true})
	rating_info!: number;

	@CreateDateColumn()
	createdAt!: Date;

	@ManyToOne(() => LeafInfo, leafInfo => leafInfo.comments, {onDelete: 'CASCADE'})
	@JoinColumn({name: 'id'})
	leafInfo!: LeafInfo;
}