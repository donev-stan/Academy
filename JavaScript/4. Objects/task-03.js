const solve = (array) => {
	const resultObject = {};

	array.forEach((element) => {
		if (resultObject.hasOwnProperty(element)) {
			resultObject[element] += 1;
		} else {
			resultObject[element] = 1;
		}
	});

	return resultObject;
};

const result_one = solve(["A", "B", "A", "A", "A"]);
const result_two = solve([1, 2, 3, 1, 1]);

for (const key in result_one) {
	console.log(`${key}: ${result_one[key]}`);
}

for (const key in result_two) {
	console.log(`${key}: ${result_two[key]}`);
}
