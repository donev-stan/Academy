const solve = (arrayOfObjects) =>
	arrayOfObjects.sort((a, b) => a.price - b.price);

const drinks = [
	{
		name: "Martini",
		price: 14,
	},
	{
		name: "Moxito",
		price: 10,
	},
	{
		name: "Bloody Marry",
		price: 20,
	},
];

const sorted = solve(drinks);

// To see the sorted array of object
for (const key in sorted) {
	console.log(key, sorted[key]);
}
