const arithmeticMean = () => {
	let number1;
	let number2;

	do {
		number1 = prompt("Please enter first number", 0);
	} while (isNaN(number1));

	if (!number1) return;

	do {
		number2 = prompt("Please enter second number", 0);
	} while (isNaN(number2));

	if (!number2) return;

	number1 = Number(number1);
	number2 = Number(number2);

	const result = (number1 + number2) / 2;

	let resultText = `(${number1} + ${number2}) / 2 = ${Math.round(result)}`;

	attachToDom(".task-02-result", ".task-02-history", resultText);
};
