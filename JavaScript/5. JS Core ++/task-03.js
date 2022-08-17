const pentagonPoints = (sidePoints, result) => {
	!result ? (result = 0) : result;
	if (sidePoints === 1) return result + 1;

	result += sidePoints + 3 * (sidePoints - 1) + (sidePoints - 2);

	return pentagonPoints(sidePoints - 1, result);
};

// console.log(pentagonPoints(1)); // sum points: 1
// console.log(pentagonPoints(2)); // sum points: 6
// console.log(pentagonPoints(3)); // sum points: 16
console.log(pentagonPoints(4)); // sum points: 31
