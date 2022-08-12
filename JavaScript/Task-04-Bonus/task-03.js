// Done

const solve = (instructionString) => {
	const position = {
		E: 0,
		W: 0,
		N: 0,
		S: 0,
	};

	for (let i = 0; i < instructionString.length; i++) {
		position[instructionString[i]] += 1;
	}

	if (position.E === position.W && position.N === position.S) return true;

	return false;
};

console.log(solve("EEWE")); // false
console.log(solve("NENESSWW")); // true
console.log(solve("EEWWWE")); // true
console.log(solve("EEWWWENS")); // true
console.log(solve("EEWWWENSE")); // false
