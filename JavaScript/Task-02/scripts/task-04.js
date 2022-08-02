const capitaliseWord = () => {
	let word;

	do {
		word = prompt("Please enter word", "GeRmANy");
	} while (word.trim().length === 0);

	const firstLetter = word.charAt(0).toLocaleUpperCase();
	const restOfTheWord = word.substring(1).toLocaleLowerCase();

	console.log(`${firstLetter}${restOfTheWord}`);
};
