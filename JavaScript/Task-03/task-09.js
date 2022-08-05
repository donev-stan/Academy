const isFactorChain = (array) => {
	let isFactorChain = true;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== "number") {
			isFactorChain = false;
			break;
		}

		if (i !== 0) {
			if (array[i] % array[i - 1] !== 0) {
				isFactorChain = false;
				break;
			}
		}
	}

	return isFactorChain;
};

console.log(`isFactorChain([4, 6, 12, 36]) = ${isFactorChain([4, 6, 12, 36])}`); // false
console.log(`isFactorChain([3, 6, 12, 36]) = ${isFactorChain([3, 6, 12, 36])}`); // true
console.log(
	`isFactorChain(["asdasd", 3, 6, 12, 36]) = ${isFactorChain([
		"asdasd",
		3,
		6,
		12,
		36,
	])}`
); // false
console.log(`isFactorChain([2, 4, 8, 32]) = ${isFactorChain([2, 4, 8, 32])}`); // true
console.log(`isFactorChain([1, 1, 1, 1]) = ${isFactorChain([1, 1, 1, 1])}`); // true
console.log(`isFactorChain([10, 3]) = ${isFactorChain([10, 3])}`); // false
console.log(`isFactorChain([2, 4, 6]) = ${isFactorChain([2, 4, 6])}`); // false
