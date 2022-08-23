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

const lettersBattle = async () => {
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

	function logPreparation() {
		console.log("\033[2J");
		console.log("================ Prepatation ===============");
		console.log("============================================");
		console.log(`    Player 1: ${letters_player_one.join("")}`);
		console.log(`    Targets: [${array_player_one.join()}] \n`);
		console.log(`    Player 2: ${letters_player_two.join("")}`);
		console.log(`    Targets: [${array_player_two.join()}]`);
		console.log("============================================\n");
	}

	function initialBattle() {
		return new Promise((res) => {
			for (let j = 0; j < 10; j++) {
				setTimeout(() => {
					logInitialBattle(j);
					if (j === 9) res(true);
				}, j * 500 + 1000);
			}
		});
	}

	//
	// function initialBattle() {
	// 	return new Promise((res) => {
	// 		const battle = (j = 0) => {
	// 			setTimeout(() => {
	// 				logInitialBattle(j);
	// 				if (j === 9) res(true);
	// 				else battle(j + 1);
	// 			}, 1000);
	// 		};
	// 		battle();
	// 	});
	// }

	function logInitialBattle(j) {
		console.log(`${j !== 0 ? "\n" : ""}Battle Exchange:`);
		console.log(
			` Player 1 attacked and killed --${
				letters_player_two[array_player_one[j]]
			}-- at position ${array_player_one[j]}`
		);
		player_two_damage.push(letters_player_two[array_player_one[j]]);

		console.log(
			` Player 2 attacked and killed --${
				letters_player_one[array_player_two[j]]
			}-- at position ${array_player_two[j]}`
		);
		player_one_damage.push(letters_player_one[array_player_two[j]]);
	}

	function calculateInitialBattleAftermath() {
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
	}

	function logInitialBattleAftermath() {
		console.log("\n================== Aftermath ==================");
		console.log("===============================================");
		console.log(`    Player 1 Lost letters: ${player_one_damage.join("")}`);
		console.log(
			`    Player 1 Letters left: ${letters_player_one.join("")}`
		);
		console.log();
		console.log(`    Player 2 Lost letters: ${player_two_damage.join("")}`);
		console.log(
			`    Player 2 Letters left: ${letters_player_two.join("")}`
		);
		console.log("===============================================\n");
	}

	function mainBattle() {
		return new Promise((res) => {
			for (let i = 0; i < 16; i++) {
				setTimeout(() => {
					const player_one_letter_score =
						letters_player_one[i].charCodeAt(0);
					const player_two_letter_score =
						letters_player_two[i].charCodeAt(0);

					const score =
						player_one_letter_score - player_two_letter_score;

					console.log(
						`${i !== 0 ? "\n" : ""}Battle: ${
							letters_player_one[i]
						} (power: ${player_one_letter_score}) vs ${
							letters_player_two[i]
						} (power: ${player_two_letter_score})`
					);

					if (score > 0) {
						scoreboard.player1 += Math.abs(score);
						console.log(
							` => Winner: ${letters_player_one[i]} (player 1)`
						);
					} else {
						scoreboard.player2 += Math.abs(score);
						console.log(
							` => Winner: ${letters_player_two[i]} (player 2)`
						);
					}

					if (i === 15) res(true);
				}, i * 500 + 1000);
			}
		});
	}

	function logWinnerAndScores() {
		console.log("\n========= Winner =========");
		console.log("==========================");

		console.log(`    Player 1 Score: ${scoreboard.player1}`);
		console.log(`    Player 2 Score: ${scoreboard.player2}`);

		console.log();
		console.log(
			`    Winner: ${
				scoreboard.player1 > scoreboard.player2
					? "Player 1"
					: "Player 2"
			}`
		);
		console.log("==========================");
	}

	logPreparation();

	async function battle() {
		console.log("\n================== Initial Battle ================");
		console.log("==================================================");
		await initialBattle();
		console.log("==================================================\n");

		calculateInitialBattleAftermath();
		logInitialBattleAftermath();

		console.log("\n================== Main Battle ================");
		console.log("===============================================");
		await mainBattle();
		console.log("===============================================\n");
	}

	battle().then(() => logWinnerAndScores());
};

lettersBattle();
