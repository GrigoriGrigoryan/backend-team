import {OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm/browser";
import {IsIn, IsInt, IsString, Max, MaxLength, Min} from "class-validator";
import WasteTypes from "../entity/wasteTypes";

export class CreateLeafInfo {
    @IsString()
	latitude!: string;

	@IsString()
	longitude!: string;

	@IsString()
	paymentCondition!: string; // paid free of condition

	@IsInt()
	rating!: number;
}