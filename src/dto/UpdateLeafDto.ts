import {IsArray, IsInt, IsOptional, IsString} from "class-validator";


export class UpdateLeafDto {
	@IsString()
	@IsOptional()
	ecoStationName!: string;

	@IsString()
	@IsOptional()
	latitude!: string;

	@IsString()
	@IsOptional()
	longitude!: string;

	@IsString()
	@IsOptional()
	address!: string;

	@IsArray()
	@IsOptional()
	wasteTypes!: string[];

	@IsArray()
	@IsOptional()
	deliveryOptions!: string[];

	@IsString()
	@IsOptional()
	contact!: string;

	@IsArray()
	@IsOptional()
	workingHours!: string[]

	@IsInt()
	@IsOptional()
	rating!: number;
}