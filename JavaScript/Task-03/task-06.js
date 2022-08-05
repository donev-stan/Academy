const mirrorArray = (array) => {
	const clonedArray = [...array];

	console.log([...clonedArray.slice(0, -1), ...array.reverse()]);
	// console.log([...[...array].slice(0, - 1), ...array.reverse()]);
};

mirrorArray([1, 2, 3, true, false, 5]);
