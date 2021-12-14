import {IsArray, IsInt, IsString} from "class-validator";

export class LeafDto {
	@IsString()
	ecoStationName!: string;

    @IsString()
	latitude!: string;

	@IsString()
	longitude!: string;

	@IsString()
	address!: string;

	@IsArray()
	wasteTypes!: string[];

	// @IsString()
	// paymentCondition!: string;

	@IsArray()
	deliveryOptions!: string[];

	@IsString()
	contact!: string;

	@IsArray()
	workingHours!: string[]

	@IsInt()
	rating!: number;
}