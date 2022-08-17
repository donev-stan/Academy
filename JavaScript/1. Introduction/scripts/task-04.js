const closerToOneHundred = () => {
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

	let resultText;

	if (Math.abs(100 - number1) < Math.abs(100 - number2)) {
		resultText = `${number1} is closer to 100 than ${number2}`;
	} else {
		resultText = `${number2} is closer to 100 than ${number1}`;
	}

	attachToDom(".task-04-result", ".task-04-history", resultText);
};
