const pentagonPoints = (sidePoints, result = 1) => {
	if (sidePoints === 1) return result;

	console.log(sidePoints);

	// result += sidePoints * 2 +
	return pentagonPoints(sidePoints - 1, result);
};

console.log(pentagonPoints(1)); // sum points: 1
console.log(pentagonPoints(2)); // sum points: 1
console.log(pentagonPoints(3)); // sum points: 6
console.log(pentagonPoints(4)); // sum points: 16
console.log(pentagonPoints(5)); // sum points: 31
