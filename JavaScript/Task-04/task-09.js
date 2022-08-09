const solve = (string) => {
	const trimmedString = string.trim();

	const [id, type] = trimmedString.split("/").reverse();

	return {
		id,
		type: id.includes(".png")
			? "image direct"
			: type === "a"
			? "album"
			: type !== "gallery"
			? "image"
			: type,
	};
};

const result_one = solve("http://imgur.com/a/cjh4E  ");
const result_two = solve("http://imgur.com/gallery/59npG");
const result_three = solve("http://imgur.com/OzZUNMM");
const result_four = solve("http://i.imgur.com/altd8Ld.png");

console.log("First result:");
for (const key in result_one) {
	console.log(`${key}: ${result_one[key]}`);
}

testing: {
	console.log("Second result:");
	for (const key in result_two) {
		console.log(`${key}: ${result_two[key]}`);
	}

	console.log("Third result:");
	for (const key in result_three) {
		console.log(`${key}: ${result_three[key]}`);
	}

	console.log("Fourth result:");
	for (const key in result_four) {
		console.log(`${key}: ${result_four[key]}`);
	}
}
