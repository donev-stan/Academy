const sumOfThePreviousTwoNumbers = () => {
	let number;

	do {
		number = prompt("Please enter a number", 0);
	} while (isNaN(number));

	if (!number) return;

	number = Number(number);

	const previousNumber = number - 1;
	const previousOfPreviousNumber = previousNumber - 1;

	const result = previousNumber + previousOfPreviousNumber;

	let resultText = `Number is ${number} => ${previousNumber} + ${previousOfPreviousNumber} = ${result}`;

	attachToDom(".task-07-result", ".task-07-history", resultText);
};
