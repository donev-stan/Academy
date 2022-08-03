const checkIfQuestion = () => {
	let text;

	do {
		text = prompt("Please enter text", "Would you do smth?");
	} while (text?.trim().length === 0);

	if (!text) return;

	const pMark = text.substring(text.length - 1);

	let resultText;
	let type;

	switch (pMark) {
		case "?":
			type = "a question";
			resultText = `${text.substring(0, text.length - 1)}, please.`;
			break;

		case ".":
			type = "not a question";
			resultText = text;
			break;

		default:
			type = "not a question";
			resultText = `${text}.`;
			break;
	}

	document.querySelector(
		".task-03-result"
	).innerHTML = `This is ${type}. <br /> Input: ${text} <br /> Edited: ${resultText}`;
};
