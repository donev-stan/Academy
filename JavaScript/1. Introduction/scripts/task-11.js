const sumOfZeroToNumber = () => {
	let number;

	do {
		number = prompt("Please enter a number", 0);
	} while (isNaN(number) || number < 0);

	if (!number) return;

	number = Number(number);

	let result = 0;
	for (let i = number; i >= 0; i--) {
		result += i;
	}

	// Or we can just use: n * (n + 1)) / 2
	console.log(
		`Result is: ${number}(${number} + 1) / 2 = ${
			(number * (number + 1)) / 2
		}`
	);

	let resultText = `Number: ${number} <br /> Sum: ${result}`;

	attachToDom(".task-11-result", ".task-11-history", resultText);
};
