enum StatusCode {
	SuccessRequest = 200,
	CreateRequest = 201,
	NoContent = 204,
	BadRequest = 400,
	NotFound = 404,
	InternalServerError = 500,
	UnauthorizedError = 401,
}

export default StatusCode;