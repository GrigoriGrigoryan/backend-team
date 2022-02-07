const ExceptionMessages = {
	NOT_DEFINED: 'Data is not defined',
	NOT_FOUND: {
		LEAF: 'Leaf not found',
		SERVICE: 'Service not found',
		UPDATE: 'Nothing to update',
		COMMENT: 'Comment not found ',
		QUESTION: 'Question not found',
		USERS: 'Users not found',
		USER: `User not found, you provided wrong email or user doesn't exist`,
		RULES: `Rules not found`,
		RULE: `Rule not found`,
	},
	INVALID: {
		USER: 'Something went wrong in the user part',
		COMMENT: 'Not valid input for comment',
		QUESTION: 'Not valid input for questions',
		SERVICE: 'Not valid input for service',
		ID: "Id is not valid",
		PASSWORD:"Wrong password",
		EMAIL:"Wrong Email",
	},

	INTERNAL: 'Internal Server Error',
	DB_ERROR: 'Not valid service ID',
};
export default ExceptionMessages;