const checkIfQuestion = () => {
	let text;

	do {
		text = prompt("Please enter text", "Stanislav?");
	} while (text.trim().length === 0);

	const pMark = text.substring(text.length - 1);

	let resultText;

	switch (pMark) {
		case "?":
			resultText = `${text.substring(0, text.length - 1)}, please.`;
			break;

		case ".":
			resultText = text;
			break;

		default:
			resultText = `${text}.`;
			break;
	}

	console.log(resultText);
};
