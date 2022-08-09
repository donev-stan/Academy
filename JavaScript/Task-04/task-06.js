const solve = (string) => {
	const resultObject = {};

	for (let i = 0; i < string.length; i++) {
		const letter = string[i];

		if (resultObject.hasOwnProperty(letter)) {
			resultObject[letter] = [...resultObject[letter], i];
		} else {
			resultObject[letter] = [i];
		}
	}

	return resultObject;
};

const result_one = solve("dodo");
const result_two = solve("ivan");

for (const key in result_one) {
	console.log(`${key}: ${result_one[key]}`);
}

for (const key in result_two) {
	console.log(`${key}: ${result_two[key]}`);
}
