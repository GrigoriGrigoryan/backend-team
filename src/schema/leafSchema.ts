import {body} from "express-validator";

const schema = [
	body('ecoStationName').optional().isString(),
	body('latitude').notEmpty().isString(),
	body('longitude').notEmpty().isString(),
	body('address').notEmpty().isString(),
	body('wasteTypes').notEmpty().isArray(),
	body('deliveryOptions').notEmpty().isArray(),
	body('contact').notEmpty().isString(),
	body('workingHours').notEmpty().isArray(),
	body('rating').optional().isInt(),
	body('rating_count').optional().isInt(),
	body('rating_array').optional().isArray(),
]

export default schema;