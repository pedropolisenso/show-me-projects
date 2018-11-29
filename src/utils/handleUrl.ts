export const handleUrl = (url: string) => {
	if (!url || typeof url !== 'string') {
		return null;
	}
	
	const base = 'https://github.com/';

	if (url.indexOf(base) !== -1) {
		return url.split(base)[1];
	}

	return url;
};
