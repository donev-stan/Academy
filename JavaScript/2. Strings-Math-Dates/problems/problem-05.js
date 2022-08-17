// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = () => {
	let sumOfTheSquares = 0;
	let squareOfTheSum = 0;

	for (let i = 1; i <= 100; i++) {
		sumOfTheSquares += i * i;
		squareOfTheSum += i;
	}

	console.log(
		`Difference between the sum of the squares of the first one hundred natural numbers and the square of the sum: ${
			squareOfTheSum * squareOfTheSum - sumOfTheSquares
		}`
	);
};

sumSquareDifference();
