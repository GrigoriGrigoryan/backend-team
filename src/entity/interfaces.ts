import {Column} from "typeorm/browser";
import {Max, Min} from "class-validator";
import {JoinColumn, ManyToOne, OneToMany} from "typeorm";
import WasteTypes from "./wasteTypes";
import LeafInfo from "./leafInfo";

export interface ILeafInfo {
	latitude: string,
	longitude: string,
	wasteTypes: string[],  // bottle , battery
	paymentCondition: string, // paid free of condition
	rating: number,
	deliveryOptions: string[],
	wasteType: WasteTypes[],
}

export interface IWasteTypes {
	coordinate_id: number,
	wasteType: string,
	leafInfo: LeafInfo,
}