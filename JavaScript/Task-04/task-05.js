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
	arrayOfObjects.sort((a, b) => b.price - a.price);

	return arrayOfObjects[1].name;
};

const result = solve(wines);

console.log(result);
