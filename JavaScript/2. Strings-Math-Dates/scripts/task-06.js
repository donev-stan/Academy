const checkForJava = () => {
	let text;

	do {
		text = prompt("Please enter text", "JavaScript is awesome!");
	} while (text?.trim().length === 0);

	const first4letters = text.substring(0, 4).toLocaleLowerCase();

	let isJavaEncountered;

	first4letters === "java"
		? (isJavaEncountered = true)
		: (isJavaEncountered = false);

	document.querySelector(
		".task-06-result"
	).innerHTML = `Original: ${text} <br/> Result: ${isJavaEncountered}`;
};
