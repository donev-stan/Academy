const wordBreakout = () => {
	let text;

	do {
		text = prompt(
			"Enter text map",
			"OISAHDFSkSOLDNFSODFHiSADFStSDFStSDFSDFyDSFS"
		);
	} while (text <= 10);

	let wantedWord = [];

	for (const letter of text) {
		if (letter === letter.toLowerCase()) {
			wantedWord.push(letter);
		}
	}

	document.querySelector(
		".task-11-result"
	).innerHTML = `Input: ${text} <br/> Found word: ${wantedWord.join("")}`;
};
