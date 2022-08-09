const stotinki = [1, 2, 5, 10, 20, 50, 100];

const solve = (amount) => {
	const resultObject = {};

	stotinki.sort((a, b) => b - a);

	while (amount > 0) {
		for (let i = 0; i < stotinki.length; i++) {
			if (stotinki[i] <= amount) {
				amount -= stotinki[i];

				if (resultObject.hasOwnProperty(`${stotinki[i]}st`)) {
					resultObject[`${stotinki[i]}st`] += 1;
				} else {
					resultObject[`${stotinki[i]}st`] = 1;
				}

				break;
			}
		}
	}

	return resultObject;
};

const result_one = solve(45);
const result_two = solve(17);

for (const key in result_one) {
	console.log(`${key}: ${result_one[key]}`);
}

for (const key in result_two) {
	console.log(`${key}: ${result_two[key]}`);
}
