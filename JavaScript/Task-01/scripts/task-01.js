const fromCelsiusToFahrenheit = () => {
	let degreesInCelsius;

	do {
		degreesInCelsius = prompt("Please enter degrees", 0);
	} while (isNaN(degreesInCelsius));

	if (!degreesInCelsius) return;

	degreesInCelsius = Number(degreesInCelsius);

	const degreesInFahrenheit = degreesInCelsius * 1.8 + 32;

	let resultText = `${degreesInCelsius}C = ${degreesInFahrenheit}F`;

	attachToDom(".task-01-result", ".task-01-history", resultText);
};
