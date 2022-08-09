const solve = (arrayOfObjects) =>
	arrayOfObjects.map((studentObject) => ({
		name: studentObject.name,
		topNote: Math.max(...studentObject.notes),
	}));

const resultArray = solve([
	{
		name: "Ivan",
		notes: [5, 6, 4],
	},
	{
		name: "Dimitar",
		notes: [4, 4, 3],
	},
]);

resultArray.forEach((obj) => {
	for (const key in obj) {
		console.log(`${key}: ${obj[key]}`);
	}
});
