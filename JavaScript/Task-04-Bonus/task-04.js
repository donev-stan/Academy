const result = [];

const solve = (array) => {
	// const combo1 = array.join("");
	const combo1 = `${array[0]}${array[1]}${array[2]}`;
	const combo2 = `${array[0]}${array[2]}${array[1]}`;

	if (result.includes(combo1) || result.includes(combo2)) return result;

	result.push(combo1);
	result.push(combo2);

	array.push(array.shift());

	return solve(array);
};

console.log(solve(["A", "B", "C"]));

// Will only work with 3 elements (towns)
