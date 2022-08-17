// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = (num) => {
	let factors = [];

	let d = 2;

	while (num > 1) {
		while (num % d === 0) {
			factors.push(d);
			num /= d;
		}

		d += 1;

		if (d * d > num) {
			if (num > 1) factors.push(num);
			break;
		}
	}

	console.log(`Largest prime factor is ${Math.max(...factors)}`);
};

largestPrimeFactor(600851475143);
