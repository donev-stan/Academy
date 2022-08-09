const solve = (object, minSumAmount, minDeliveryCount) => {
	const resultArray = [];

	for (const key in object) {
		const orders = object[key];
		const sumOfOrders = orders.reduce((a, b) => a + b, 0);
		const numOfOrders = orders.length;

		if (numOfOrders >= minDeliveryCount && sumOfOrders >= minSumAmount) {
			resultArray.push(key);
		}
	}

	return resultArray;
};

const result = solve(
	{
		DimitarTrendafilov: [5.5, 4.5, 6, 3],
		IvanVladimirov: [4, 7.2, 6],
		VasilDudinski: [18.5],
		NikiAngelov: [3.5, 3.5, 2.5, 3, 4],
	},
	16.9,
	3
);

console.log(result);
