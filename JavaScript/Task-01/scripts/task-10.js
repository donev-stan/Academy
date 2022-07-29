const calculateAnimalLegs = () => {
	let numberOfChickens;
	let numberOfPigs;
	let numberOfCows;

	do {
		numberOfChickens = prompt("Please enter the number of CHICKENS", 0);
	} while (isNaN(numberOfChickens) || numberOfChickens < 0);

	if (!numberOfChickens) return;

	do {
		numberOfPigs = prompt("Please enter the number of PIGS", 0);
	} while (isNaN(numberOfPigs) || numberOfPigs < 0);

	if (!numberOfPigs) return;

	do {
		numberOfCows = prompt("Please enter the number of COWS", 0);
	} while (isNaN(numberOfCows) || numberOfCows < 0);

	if (!numberOfCows) return;

	numberOfChickens = Number(numberOfChickens);
	numberOfPigs = Number(numberOfPigs);
	numberOfCows = Number(numberOfCows);

	const result = calculateLegs(numberOfChickens, numberOfPigs, numberOfCows);

	let resultText = `Chickens: ${numberOfChickens} <br /> Pigs: ${numberOfPigs} <br /> Cows: ${numberOfCows} <br /> Sum Legs = ${result}`;

	attachToDom(".task-10-result", ".task-10-history", resultText);
};

const calculateLegs = (numberOfChickens, numberOfPigs, numberOfCows) => {
	return numberOfChickens * 2 + numberOfPigs * 4 + numberOfCows * 4;
};
