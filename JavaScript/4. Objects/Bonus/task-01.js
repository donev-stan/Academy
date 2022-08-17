const gcd = (a, b) => {
	if (a == 0) return b;
	return gcd(b % a, a);
};

const solve = (array) => {
	return array.reduce((previousValue, currentValue) =>
		gcd(currentValue, previousValue)
	);
};

console.log(solve([2, 4, 6, 8, 16]));
