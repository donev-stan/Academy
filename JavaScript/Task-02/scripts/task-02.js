const randomNumBetweenNums = () => {
	let x, y, guess;

	do {
		x = Number(prompt("Please enter X", 0));

		console.log(x);
		console.log(isNaN(x));
	} while (isNaN(x));

	if (!x && x !== 0) return;

	do {
		y = Number(prompt("Please enter Y", 0));
	} while (isNaN(y));

	if (!y && y !== 0) return;

	do {
		guess = Number(prompt(`Guess the number between ${x} and ${y}`, 0));
	} while (isNaN(guess));

	if (!guess && guess !== 0) return;

	const generatedNum = generateRandomNumber(x, y);

	console.log(`Generated: ${generatedNum}`);
	console.log(`Guessed: ${guess}`);

	generatedNum === guess ? alert("Good Work!") : alert("Try Again!");
};

const generateRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

// Check is the input is an empty string
