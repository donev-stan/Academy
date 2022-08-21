const cardPower = {
	A: 14,
	K: 13,
	Q: 12,
	J: 11,
};

const winType = (length, card) => {
	switch (card) {
		case "A":
			card = "Aces";
			break;

		case "K":
			card = "Kings";
			break;

		case "Q":
			card = "Queens";
			break;

		case "J":
			card = "Valeta";
			break;

		default:
			break;
	}

	switch (length) {
		case 2:
			return `Combination Pair of ${card}`;

		case 3:
			return `Combination Three of a kind with ${card}`;

		case 4:
			return `Combination Four of a kind with ${card}`;

		case 5:
			return `Combination Full House with ${card}`;

		default:
			return `Nothing`;
	}
};

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

	check_winner: {
		const playersCards = {};

		players.forEach((player) => {
			playersCards[player.name] = [];

			player.hand.forEach((cardInHand) => {
				if (cardsOnTable.includes(cardInHand)) {
					playersCards[player.name].push(cardInHand);
				}
			});

			if (playersCards[player.name].length === 0) {
				return delete playersCards[player.name];
			}

			playersCards[player.name] = {
				name: player.name,
				cards: [
					...playersCards[player.name],
					...cardsOnTable.filter((card) =>
						playersCards[player.name].includes(card)
					),
				],
			};

			const cardsLength = playersCards[player.name].cards.length;
			const sampleCard = playersCards[player.name].cards[0];

			playersCards[player.name] = {
				...playersCards[player.name],
				winType: winType(cardsLength, sampleCard),
				power: cardPower[sampleCard] * cardsLength,
			};
		});

		const sortedWinners = Object.values(playersCards).sort(
			(a, b) => b.power - a.power
		);

		return `Winner ${sortedWinners[0].name}, ${sortedWinners[0].winType}, in pot: ${money}`;
	}
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
