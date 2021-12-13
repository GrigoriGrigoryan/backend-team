import { IsInt, IsString} from "class-validator";

export class LeafDto {
    @IsString()
	latitude!: string;

	@IsString()
	longitude!: string;

	@IsString()
	paymentCondition!: string; // paid free of condition

	@IsInt()
	rating!: number;
}