const solve = (cards) => {
	const allProperties = {
		colors: [],
		numbers: [],
		shades: [],
		shapes: [],
	};

	cards.forEach((card) => {
		allProperties.colors.push(card.color);
		allProperties.numbers.push(card.number);
		allProperties.shades.push(card.shade);
		allProperties.shapes.push(card.shape);
	});

	const sameDeck = Object.values(allProperties).every((stack) => {
		const unique = stack.every(
			(property) =>
				stack.indexOf(property) === stack.lastIndexOf(property)
		);
		const equal = stack.every((property) => property === stack[0]);

		return unique || equal;
	});

	console.log(cards, "=>", sameDeck);
};

solve([
	{ color: "green", number: 1, shade: "empty", shape: "squiggle" },
	{ color: "green", number: 2, shade: "empty", shape: "diamond" },
	{ color: "green", number: 3, shade: "empty", shape: "oval" },
]);

solve([
	{ color: "purple", number: 3, shade: "full", shape: "oval" },
	{ color: "green", number: 1, shade: "full", shape: "oval" },
	{ color: "red", number: 3, shade: "full", shape: "oval" },
]);
