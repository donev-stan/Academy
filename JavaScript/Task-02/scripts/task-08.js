const findBombReturnDuck = () => {
	let string;

	do {
		string = prompt(
			"Enter your string",
			"Lorem ipsum dolor sit amet, consebombctetur adip"
		);
	} while (string.trim().length === 0);

	if (string.includes("bomb")) {
		const indexOfBomb = string.indexOf("bomb");

		const stringWithoutBomb = `${string.substring(
			0,
			indexOfBomb
		)}${string.substring(indexOfBomb + 4)}`;

		console.log(`Duck!!!`);

		console.log(`Bomb defused! \n ${stringWithoutBomb}`);
	} else {
		console.log("No bomb, relax.");
	}
};
