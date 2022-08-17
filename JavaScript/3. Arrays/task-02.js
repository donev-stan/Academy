const findNemo = (string) => {
	const arrayOfWords = string.split(" ");

	if (arrayOfWords.includes("Nemo")) {
		console.log(arrayOfWords.indexOf("Nemo") + 1);
	}
};

findNemo("I am finding Nemo");
findNemo("I am Nemo");
