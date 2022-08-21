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

	for (array, i = 0; i < 26; ++i) array[i] = i;

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

	return array.splice(0, 10);
};

const wordsWar = () => {
	const letters_player_one = randomizeLetters();
	const letters_player_two = randomizeLetters();

	// const array_player_one = randomizeNumbers();
	const array_player_one = randomizeUniqueNums();
	// const array_player_two = randomizeNumbers();
	const array_player_two = randomizeUniqueNums();

	console.log("=======================================================");
	console.log(`Player 1: ${letters_player_one.join("")}`);
	console.log(array_player_one);
	console.log(`Player 2: ${letters_player_two.join("")}`);
	console.log(array_player_two);
	console.log("=======================================================");

	for (let i = 0; i < 10; i++) {
		console.log(
			`Player 1 attacked and killed --${
				letters_player_two[array_player_one[i]]
			}-- at position ${array_player_one[i]}`
		);

		console.log(
			`Player 2 attacked and killed --${
				letters_player_one[array_player_two[i]]
			}-- at position ${array_player_two[i]}`
		);

		console.log("-------------------------------------------------------");
	}

	console.log("=======================================================");
	console.log(`Aftermath:`);
	console.log(`Player 1: ${letters_player_one.join("")}`);
	console.log(`Player 2: ${letters_player_two.join("")}`);
	console.log("=======================================================");
};

wordsWar();
