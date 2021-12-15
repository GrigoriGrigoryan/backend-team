import {body} from "express-validator";

const schema = [
	body('ecoStationName').optional().isString(),
	body('latitude').isString(),
	body('longitude').isString(),
	body('address').isString(),
	body('wasteTypes').isArray(),
	body('deliveryOptions').isArray(),
	body('contact').isString(),
	body('workingHours').isArray(),
	body('rating').optional().isInt()
]

export default schema;