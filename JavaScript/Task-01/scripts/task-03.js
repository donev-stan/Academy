const whatsThatNumber = () => {
	let number;

	do {
		number = prompt("Please enter a number", 0);
	} while (isNaN(number));

	if (!number) return;

	number = Number(number);

	let resultText;

	if (number < 0) {
		resultText = `${number} is false!`;
		// resultDiv.textContent = `${number} is false!`;
	} else if (number > 0) {
		resultText = `${number} is true!`;
		// resultDiv.textContent = `${number} is true!`;
	} else {
		resultText = `${number} is null!`;
		// resultDiv.textContent = `${number} is null!`;
	}

	attachToDom(".task-03-result", ".task-03-history", resultText);
};
