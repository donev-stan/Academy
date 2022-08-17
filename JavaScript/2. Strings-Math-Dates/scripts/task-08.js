const findBombReturnDuck = () => {
	let string;

	do {
		string = prompt(
			"Enter your string",
			"Lorem ipsum dolor sit amet, consebombctetur adip"
		);
	} while (string?.trim().length === 0);

	if (!string) return;

	let resultText;

	if (string.toLowerCase().includes("bomb")) {
		const indexOfBomb = string.indexOf("bomb");

		const stringWithoutBomb = `${string.substring(
			0,
			indexOfBomb
		)}${string.substring(indexOfBomb + 4)}`;

		resultText = `Duck!!! <br/> Found a bomb in position ${indexOfBomb}. <br/> Bomb defused: ${stringWithoutBomb}`;
	} else {
		resultText = `No bomb, relax.`;
	}

	document.querySelector(
		".task-08-result"
	).innerHTML = `Input: ${string} <br/> ${resultText}`;
};
