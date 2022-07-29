const minutesToSeconds = () => {
	let minutes;

	do {
		minutes = prompt("Please enter minutes", 0);
	} while (isNaN(minutes) || minutes < 0);

	if (!minutes) return;

	number = Number(minutes);

	const seconds = number * 60;

	let resultText = `${minutes} minutes = (${minutes} x 60) = ${seconds} seconds`;

	attachToDom(".task-06-result", ".task-06-history", resultText);
};
