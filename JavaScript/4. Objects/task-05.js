const wines = [
	{
		name: "Zitara Permium",
		price: 75,
	},
	{
		name: "Zitara Mavrud",
		price: 20,
	},
	{
		name: "Grand Cuvee",
		price: 25,
	},
	{
		name: "Bottega Gold",
		price: 40,
	},
];

const solve = (arrayOfObjects) => {
	const winesCount = arrayOfObjects.length;

	switch (winesCount) {
		case 0:
			return null;

		case 1:
			return arrayOfObjects[0].name;

		default:
			return arrayOfObjects.sort((a, b) => b.price - a.price)[1].name;
	}
};

const result = solve(wines);

console.log(result);
