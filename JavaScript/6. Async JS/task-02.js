const randomizeLetters = () => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	let result = "";

	for (let i = 0; i < 26; ++i) {
		result += alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	return result.split("");
};

const randomizeNumbers = () => {
	return Array.from({ length: 10 }, () => Math.floor(Math.random() * 26));
};

const randomizeUniqueNums = () => {
	const array = [];

	for (array, i = 0; i < 10; ++i) array[i] = i;

	let tmp;
	let current;
	let top = array.length;

	if (top) {
		while (--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}
	}

	return array;
};

const wordsWar = () => {
	const letters_player_one = randomizeLetters();
	const letters_player_two = randomizeLetters();

	const array_player_one = randomizeNumbers();
	// const array_player_one = randomizeUniqueNums();
	const array_player_two = randomizeNumbers();
	// const array_player_two = randomizeUniqueNums();

	console.log(`Player 1: ${letters_player_one.join("")}`);
	console.log(`Player 2: ${letters_player_two.join("")}`);

	console.log(array_player_one);
	console.log(array_player_two);

	for (let i = 0; i < 10; i++) {
		letters_player_two.splice(letters_player_two[array_player_one[i]], 1);

		console.log(
			`Player 1 attacked and killed -- ${
				letters_player_two[array_player_one[i]]
			} -- at position ${array_player_one[i]}`
		);

		letters_player_one.splice(letters_player_one[array_player_two[i]], 1);

		console.log(
			`Player 2 attacked and killed -- ${
				letters_player_one[array_player_two[i]]
			} -- at position ${array_player_two[i]}`
		);
	}

	console.log(`Aftermath:`);
	console.log(`Player 1: ${letters_player_one.join("")}`);
	console.log(`Player 2: ${letters_player_two.join("")}`);
};

wordsWar();
