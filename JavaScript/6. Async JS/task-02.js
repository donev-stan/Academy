const randomizeLetters = () => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	let result = "";

	for (let i = 0; i < 26; ++i) {
		result += alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	return result.split("");
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

// Variables
const letters_player_one = randomizeLetters();
const letters_player_two = randomizeLetters();

const array_player_one = randomizeUniqueNums();
const array_player_two = randomizeUniqueNums();

const player_one_damage = [];
const player_two_damage = [];

const scoreboard = {
	player1: 0,
	player2: 0,
};

const wordsWar = () => {
	console.log("\n===================== Prepatation =====================");
	console.log("=======================================================");
	console.log(`Player 1: ${letters_player_one.join("")}`);
	console.log(`Targets: [${array_player_one.join()}] \n`);
	console.log(`Player 2: ${letters_player_two.join("")}`);
	console.log(`Targets: [${array_player_two.join()}]`);
	console.log("=======================================================");

	console.log("\n=================== Initial Battle ====================");
	console.log("=======================================================");
	let j = 0;
	const initialBattle = () => {
		setTimeout(() => {
			console.log(
				`\nPlayer 1 attacked and killed --${
					letters_player_two[array_player_one[j]]
				}-- at position ${array_player_one[j]}`
			);
			player_two_damage.push(letters_player_two[array_player_one[j]]);

			console.log(
				`Player 2 attacked and killed --${
					letters_player_one[array_player_two[j]]
				}-- at position ${array_player_two[j]}`
			);
			player_one_damage.push(letters_player_one[array_player_two[j]]);

			j++;
			if (j < 10) initialBattle();
			else {
				console.log(
					"======================================================="
				);

				logBattleAftermath();
			}
		}, 1000);
	};
	initialBattle();
};

const logBattleAftermath = () => {
	for (let i = 0; i < 10; i++) {
		letters_player_one.splice(
			letters_player_one.indexOf(player_one_damage[i]),
			1
		);

		letters_player_two.splice(
			letters_player_two.indexOf(player_two_damage[i]),
			1
		);
	}

	console.log("\n====================== Aftermath ======================");
	console.log("=======================================================");
	console.log(`Player 1 Lost letters: ${player_one_damage.join("")}`);
	console.log(`Player 1 Letters left: ${letters_player_one.join("")}`);
	console.log();
	console.log(`Player 2 Lost letters: ${player_two_damage.join("")}`);
	console.log(`Player 2 Letters left: ${letters_player_two.join("")}`);
	console.log("=======================================================");

	logMainFight();
};

const logMainFight = () => {
	console.log("\n===================== Main Battle =====================");
	console.log("=======================================================");

	let i = 0;
	const fight = () => {
		setTimeout(() => {
			const player_one_letter_score = letters_player_one[i].charCodeAt(0);
			const player_two_letter_score = letters_player_two[i].charCodeAt(0);

			const score = player_one_letter_score - player_two_letter_score;

			console.log(
				`\nBattle: ${letters_player_one[i]} (power: ${player_one_letter_score}) vs ${letters_player_two[i]} (power: ${player_two_letter_score})`
			);

			if (score > 0) {
				scoreboard.player1 += Math.abs(score);
				console.log(` => Winner: ${letters_player_one[i]} (player 1)`);
			} else {
				scoreboard.player2 += Math.abs(score);
				console.log(` => Winner: ${letters_player_two[i]} (player 2)`);
			}

			i++;
			if (i < 16) fight();
			else {
				console.log(
					"\n======================================================="
				);

				logWinnerAndScores();
			}
		}, 1400);
	};
	fight();
};

const logWinnerAndScores = () => {
	console.log("\n======================= Winner ========================");
	console.log("=======================================================");

	console.log(`Player 1 Score: ${scoreboard.player1}`);
	console.log(`Player 2 Score: ${scoreboard.player2}`);

	console.log();
	console.log(
		`Winner: ${
			scoreboard.player1 > scoreboard.player2 ? "Player 1" : "Player 2"
		}`
	);

	console.log("=======================================================");
};

wordsWar();
