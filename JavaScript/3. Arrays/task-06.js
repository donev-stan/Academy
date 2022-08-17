const mirrorArray = (array) => {
	const clonedArray = [...array];

	console.log([...clonedArray.slice(0, -1), ...clonedArray.reverse()]);
};

mirrorArray([1, 2, 3, true, false, 5]);
