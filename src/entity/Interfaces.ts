import {LeafInfo} from "./LeafInfo";

export interface ILeafInfo {
	ecoStationName: string,
	latitude: string,
	longitude: string,
	wasteTypes: string[],  // bottle , battery
	paymentCondition: string, // paid free of condition
	rating: number,
	deliveryOptions: string[],
	//wasteType: WasteTypes[],
}

export interface IWasteTypes {
	coordinate_id: number,
	wasteType: string,
	leafInfo: LeafInfo,
}