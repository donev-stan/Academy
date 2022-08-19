const solve = ([cardsOnTable, money, players]) => {
	validate_input: {
		if (cardsOnTable.length > 5) return "Extra cards on the table!";
		else if (cardsOnTable.length < 5)
			return "Not enough cards on the table!";

		if (players.length > 6) return "Cannot play with more than 6 players!";
		else if (players.length < 6) return "Not enough players to play!";

		const cardCounts = {};

		for (const card of cardsOnTable) {
			cardCounts[card] = cardCounts[card] ? cardCounts[card] + 1 : 1;
		}

		for (const player of players) {
			for (const card of player.hand) {
				cardCounts[card] = cardCounts[card] ? cardCounts[card] + 1 : 1;

				// if (cardCounts[card] > 4) {
				// 	return `${player.name} is cheating by having an extra ${card}`;
				// }
			}
		}

		const isThereExctraCard = !Object.values(cardCounts).every(
			(value) => value < 5
		);

		if (isThereExctraCard) {
			const card = Object.keys(cardCounts).find(
				(key) => cardCounts[key] > 4
			);
			return `Extra ${card} found! Somebody is cheating!`;
		}
	}

	const tableCardsCount = {};

	for (const card of cardsOnTable) {
		tableCardsCount[card] = tableCardsCount[card]
			? tableCardsCount[card] + 1
			: 1;
	}

	console.log(tableCardsCount);

	players.forEach((player) => {
		console.log(player);

		const hand = player.hand;

		if (
			hand[0] ===
			Object.keys(tableCardsCount).find((key) => key === hand[0])
		) {
			console.log(hand[0], player.name);
		}
	});

	// console.log(
	// 	Object.fromEntries(
	// 		Object.entries(cardCounts).filter(([key, value]) => value > 1)
	// 	)
	// );

	// console.log(players);

	// check pair - player has 2 equal cards in hand
	// check three of a kind - player got a card in his hands that is repeated two times on the table
	// check four of a kind - player got a card in his hands that is repeated three times on the table
	// check full house - player got a card in his hands that is repeated three times on the table
};

console.log(
	solve([
		["A", "K", "K", "10", "2"],
		12987123,
		[
			{ name: "Blago", hand: ["A", "7"] },
			{ name: "Petko", hand: ["6", "3"] },
			{ name: "Vasko", hand: ["K", "8"] },
			{ name: "Valeri", hand: ["3", "4"] },
			{ name: "Martin", hand: ["A", "J"] },
			{ name: "Hristo", hand: ["Q", "9"] },
		],
	])
);
