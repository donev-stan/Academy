const switchChars = () => {
	let text;

	do {
		text = prompt("Please enter text", "This is some random message");
	} while (text.trim().length <= 1);

	const firstLetter = text.charAt(0);
	const lastLetter = text.charAt(text.length - 1);
	const result =
		lastLetter + text.substring(1, text.length - 1) + firstLetter;

	console.log(result);
};
