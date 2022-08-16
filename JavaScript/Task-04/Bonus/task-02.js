const map = {
	a: "-a-",
	e: "-e-",
	i: "-i-",
	o: "-o-",
	u: "-u-",
};

const solve = (string) => {
	let result = [];

	for (let i = 0; i < string.length; i++) {
		map.hasOwnProperty(string[i])
			? result.push(map[string[i]])
			: result.push(string[i]);
	}

	return result.join("");
};

console.log(solve("apple"));
console.log(solve("orange"));
console.log(solve("paela"));
