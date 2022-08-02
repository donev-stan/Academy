const checkForJava = () => {
	let text;

	do {
		text = prompt("Please enter text", "JavaScript is awesome!");
	} while (text.trim().length === 0);

	const first4letters = text.substring(0, 4).toLocaleLowerCase();

	first4letters === "java" ? console.log(true) : console.log(false);
};
