const solve = (goods) => {
	// const pens = goods.find((element, index, array) => {
	// 	console.log(element, index);
	// 	console.log(element === 1 && array[index + 1] === 9);

	// 	return element === 1 && array[index + 1] === 9;
	// });

	// const pens = goods.filter((element, index, array) => {
	// 	// console.log(element, index);
	// 	// console.log(element === 1 && array[index + 1] === 9);
	// 	// if (element === 1 && array[index + 1] === 9) return 5;
	// });

	// const pens = goods.reduce(
	// 	(previousValue, currentValue, currentIndex, array) =>
	// 		previousValue === 1 && currentValue === 9,
	// 	0
	// );

	let pens = 0;

	for (let i = 0; i < goods.length; i++) {
		const element = goods[i];
	}

	console.log(pens);
};

solve([3, 4, 1, 9, 6, 9, 3, 9, 6, 2, 2, 6, 1, 9, 1, 3, 4, 1, 9]);
