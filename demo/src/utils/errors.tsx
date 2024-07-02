export const formatErrors = (errors = []) => {
	return {
		status: errors[0].status,
		title: errors[0].name || errors[0].title,
		message: JSON.stringify(errors.map(e => formattedError(e))),
	};
};

export const formatError = error => {
	return Array.isArray(error) ? formattedError(error[0]) : formattedError(error);
};

// Error Types
export const formattedError = e => {
	switch (e.status) {
		case '401':
			return { status: e.status, title: e.name || e.title, message: e.message };

		case '403':
			return { status: e.status, title: e.name || e.title, message: e.message };

		case '422':
			return { status: e.status, title: e.name || e.title, message: e.message };

		default:
			return { status: e.status, title: e.name || e.title, message: e.message };
	}
};
