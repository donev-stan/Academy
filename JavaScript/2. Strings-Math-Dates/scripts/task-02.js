const randomNumBetweenNums = () => {
	let x, y, guess;

	do {
		x = prompt("Please enter X", 0);
	} while (isNaN(x) || x.trim() === "");

	if (!x) return;

	do {
		y = prompt("Please enter Y", 0);
	} while (isNaN(y) || y.trim() === "");

	if (!y) return;

	do {
		guess = prompt(`Guess the number between ${x} and ${y}`, 0);
	} while (isNaN(guess) || guess.trim() === "");

	if (!guess) return;

	x = Number(x);
	y = Number(y);
	guess = Number(guess);

	const generatedNum = generateRandomNumber(x, y);

	document.querySelector(
		".task-02-result"
	).innerHTML = `X: ${x} <br/> Y: ${y} <br/> Generated: ${generatedNum} <br/> Your Guess: ${guess}`;

	setTimeout(() => {
		generatedNum === guess ? alert("Good Work!") : alert("Try Again!");
	}, 800);
};

const generateRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};
