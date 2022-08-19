const solve = (cards) => {
	const allproperties = {
		colors: [],
		numbers: [],
		shades: [],
		shapes: [],
	};

	cards.forEach((card) => {
		const { color, number, shade, shape } = card;

		allproperties.colors.push(color);
		allproperties.numbers.push(number);
		allproperties.shades.push(shade);
		allproperties.shapes.push(shape);
	});

	const sameDeck = Object.values(allproperties).every(
		(groupedCardsProperties) => {
			const unique = groupedCardsProperties.every(
				(property) =>
					groupedCardsProperties.indexOf(property) ===
					groupedCardsProperties.lastIndexOf(property)
			);
			const equal = groupedCardsProperties.every(
				(property) => property === groupedCardsProperties[0]
			);

			return unique || equal;
		}
	);

	console.log(sameDeck);
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
