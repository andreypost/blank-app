export const provide = (data, time = (Math.round(Math.random() * 1500) + 1)) => {
	return new window.Promise((resolve) => window.setTimeout(() => {
		resolve(data);
	}, time));
};

export const provideWithRandomError = (data, time = Math.random()) => {
	return new window.Promise((resolve, reject) => window.setTimeout(() => {
		if (time > 0.75) {
			reject(new Error('Oops! Something went wrong'));
		} else {
			resolve(data);
		}
	}, time));
};
