const yearsToDays = () => {
	let years;

	do {
		years = prompt("Please enter years", 0);
	} while (isNaN(years) || years < 0);

	if (!years) return;

	years = Number(years);

	const yearsInDays = years * 365.2425;

	let resultText = `${years} years = (${years} x 365.2425) = ${yearsInDays} days`;

	attachToDom(".task-08-result", ".task-08-history", resultText);
};
