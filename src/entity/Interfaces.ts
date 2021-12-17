export interface ILeafInfo {
	ecoStationName: string,
	latitude: string,
	longitude: string,
	wasteTypes: string[],
	rating: number,
	deliveryOptions: string[],
	address: string,
	contact: string,
	rating_array: number[],
	workingHours: string[],
}

export interface IComment {
	content: string;
	createdAt: Date;
	rating_info: number;
}