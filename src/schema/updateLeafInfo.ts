import {body} from "express-validator";

const schema = [
	body('ecoStationName').optional().isString(),
	body('latitude').optional().isString(),
	body('longitude').optional().isString(),
	body('address').optional().isString(),
	body('wasteTypes').optional().isArray(),
	body('deliveryOptions').optional().isArray(),
	body('contact').optional().isString(),
	body('workingHours').optional().isArray(),
	body('rating').optional().isInt(),
	body('rating_array').optional().isArray(),
];

export default schema;