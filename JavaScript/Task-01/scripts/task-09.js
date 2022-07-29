const calculateBasketballPoints = () => {
	let twoPointers;
	let threePointers;

	do {
		twoPointers = prompt("Please enter the number of two pointers", 0);
	} while (isNaN(twoPointers) || twoPointers < 0);

	if (!twoPointers) return;

	do {
		threePointers = prompt("Please enter the number of three pointers", 0);
	} while (isNaN(threePointers) || threePointers < 0);

	if (!threePointers) return;

	twoPointers = Number(twoPointers);
	threePointers = Number(threePointers);

	const result = calculatePoints(twoPointers, threePointers);

	let resultText = `Two pointers: ${twoPointers} <br /> Three pointers: ${threePointers} <br /> Result Points: ${result}`;

	attachToDom(".task-09-result", ".task-09-history", resultText);
};

const calculatePoints = (twoPointers, threePointers) => {
	return twoPointers * 2 + threePointers * 3;
};
