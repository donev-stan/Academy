const checkValidCard = (card) => {
	const value =
		typeof card.color === "string" &&
		!isNaN(card.number) &&
		typeof card.shade === "string" &&
		typeof card.shape === "string";

	return value;
};

with_object: {
	const solve = (cards) => {
		input_verify: {
			if (cards.length < 2) return console.log("Invalid number of cards");

			const errorWithCards = !cards.every((card) => checkValidCard(card));

			if (errorWithCards)
				return console.log("Something wrong with a card!");
		}

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
}

with_array: {
	const solve = (cards) => {
		input_verify: {
			if (cards.length < 2) return console.log("Invalid number of cards");

			const errorWithCards = !cards.every((card) => checkValidCard(card));

			if (errorWithCards)
				return console.log("Something wrong with a card!");
		}

		const properties = ["color", "number", "shade", "shape"];

		const allProperties = properties.map((property) =>
			cards.map((card) => card[property])
		);

		const isSameDeck = allProperties.every((stack) => {
			const uniqueSet = stack.every(
				(value) => stack.indexOf(value) === stack.lastIndexOf(value)
			);
			const equalSet = stack.every((value) => value === stack[0]);

			return uniqueSet || equalSet;
		});

		console.log(cards, "=>", isSameDeck);
	};

	// solve([
	// 	{ color: "green", number: 1, shade: "empty", shape: "squiggle" },
	// 	{ color: "green", number: 2, shade: "empty", shape: "diamond" },
	// 	{ color: "green", number: 3, shade: "empty", shape: "oval" },
	// ]);

	// solve([
	// 	{ color: "purple", number: 3, shade: "full", shape: "oval" },
	// 	{ color: "green", number: 1, shade: "full", shape: "oval" },
	// 	{ color: "red", number: 3, shade: "full", shape: "oval" },
	// ]);

	// solve([{ color: "purple", number: 3, shade: "full", shape: "oval" }]);

	solve([
		{ color: "purple", number: 3, shade: "full", shape: "oval" },
		{ color: "green", number: "gosho", shade: "full", shape: "oval" },
		{ color: "red", number: 3, shade: "full", shape: "oval" },
	]);
}

// Избирам втория метод за решаване (with_array)
