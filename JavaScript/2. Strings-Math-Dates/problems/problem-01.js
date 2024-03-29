//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfAllMultiplesOf3or5below1000 = () => {
	let sum = 0;

	for (let i = 0; i < 1000; i++) {
		if (Number.isInteger(i / 5) || Number.isInteger(i / 3)) {
			sum += i;
		}
	}

	console.log(`Sum of all multiples of 3 or 5 below 1000: ${sum}`);
};

sumOfAllMultiplesOf3or5below1000();
