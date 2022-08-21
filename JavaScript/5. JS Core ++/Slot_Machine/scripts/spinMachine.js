import globalStats from "./globalVars.js";
import { playPanelElements, buttons } from "./elements.js";

const spinMachine = (spin_money, total_money) => {
	if (total_money) globalStats.total_money = total_money;
	if (spin_money) {
		globalStats.spin_money = spin_money;
		playPanelElements.input_spin_money().value = spin_money;
	}

	globalStats.spin_money = playPanelElements.input_spin_money().value;
	globalStats.total_money -= globalStats.spin_money;

	playPanelElements.total_money_result().textContent =
		globalStats.total_money;

	const slots = document.querySelectorAll(".slot");
	slots.forEach((slot) => (slot.textContent = null));

	buttons.spinBtn().disabled = true;

	if (globalStats.total_money === 0) {
		// restart game
	}
	if (globalStats.total_money < globalStats.spin_money) {
		// not enough money
	}

	const spin = [];
	let winnings = 0;

	// Randomize Spin
	randomize_spin: {
		for (let i = 0; i < 5; i++) spin[i] = generateRandomNumber();
		console.log("Spin:");
		console.log(spin);
	}

	// Calculate Winnings
	calculate_winnings: {
		const count = spin.reduce((acc, value) => {
			return { ...acc, [value]: (acc[value] || 0) + 1 };
		}, {});
		const repeats = Math.max(...Object.values(count));

		if (repeats === 5) winnings += globalStats.spin_money * 25;
		if (repeats === 4) winnings += globalStats.spin_money * 10;

		if (repeats === 3) {
			const nextToEachOther = checkNextToEachOther(spin);

			if (nextToEachOther) winnings += globalStats.spin_money * 5;
			else winnings += globalStats.spin_money * 3;
		}

		globalStats.total_money += winnings;

		console.log(`Bet: ${globalStats.spin_money}`);
		console.log(`Winnings: ${winnings}`);
		console.log(`Total money: ${globalStats.total_money}`);
	}

	// Render Results
	render_results: {
		let i = 0;
		const slots = document.querySelectorAll(".slot");

		const displaySymbols = () => {
			setTimeout(() => {
				slots[i].innerHTML = symbolsMap[spin[i]];

				i++;
				if (i < 5) displaySymbols();
				else displayStats();
			}, (i * 550) / i);
		};
		displaySymbols();

		const displayStats = () => {
			setTimeout(() => {
				playPanelElements.total_money_result().textContent =
					globalStats.total_money;

				playPanelElements.spin_result().textContent = `Winnings: ${winnings}`;

				buttons.spinBtn().disabled = false;
			}, 1000);
		};
	}
};

const generateRandomNumber = (min = 0, max = 5) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkNextToEachOther = (array) => {
	for (let i = 0; i < 3; i++)
		if ((array[i] === array[i + 1]) === array[i + 2]) return true;

	return false;
};

const symbolsMap = {
	0: `<img src="./images/casino.png" class="symbol">`,
	1: `<img src="./images/apple.png" class="symbol">`,
	2: `<img src="./images/grape.png" class="symbol">`,
	3: `<img src="./images/cherry.png" class="symbol">`,
	4: `<img src="./images/lemon.png" class="symbol">`,
	5: `<img src="./images/watermelon.png" class="symbol">`,
};

export default spinMachine;
