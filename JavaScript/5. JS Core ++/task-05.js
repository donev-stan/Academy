// Not so proud with this solution but it works

const solve = (array) => {
	const survivors = [1, 5, 9];
	const survived = new Set();

	array.reduce((previousValue, currentValue) => {
		if (
			survivors.includes(currentValue) &&
			survivors.includes(previousValue)
		) {
			survived.add(previousValue);
			survived.add(currentValue);
		}

		return currentValue;
	});

	const arraySurvivors = [...survived];
	switch (arraySurvivors.length) {
		case 0:
			console.log("Nobody survived! RIP 1, 5, 9");
			break;

		case 2:
			console.log(
				`Only ${arraySurvivors} survived! ${survivors.filter(
					(s) => !arraySurvivors.includes(s)
				)} `
			);
			break;

		default:
			console.log("Everyone survived!");
			break;
	}
};

solve([2, 6, 1, 5, 9, 2, 7, 8]);
solve([1, 2, 8, 2, 3, 5, 9, 2]);
solve([3, 9, 2, 5, 3, 7, 8, 9]);
