// Напишете функция, която получава array от обекти (drinks), като всеки обекти има 2 ключа - name и price.
// Функцията трябва да сортира array-a по price ascending и да върне новия array.

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
