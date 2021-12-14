import {LeafInfo} from "./LeafInfo";

export interface ILeafInfo {
	ecoStationName: string,
	latitude: string,
	longitude: string,
	wasteTypes: string[],
	rating: number,
	deliveryOptions: string[],
	address: string,
	contact: string,
	workingHours: string[];
	// paymentCondition: string
	//wasteType: WasteTypes[],
}

export interface IWasteTypes {
	coordinate_id: number,
	wasteType: string,
	leafInfo: LeafInfo,
}