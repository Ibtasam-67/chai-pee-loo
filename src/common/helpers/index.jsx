export const setHeaders = () => {
	const headerConfig = {
		headers: { Authorization: "Bearer " + localStorage.getItem("token") },
	};
	return headerConfig;
};