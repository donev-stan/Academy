const isMatrixSpecial = (array) => {
	let newArray = array.map((element) =>
		element.split(" ").map((el) => Number(el))
	);

	let rowsArray = [0, 0, 0];
	let colsArray = [0, 0, 0];

	for (let i = 0; i < newArray.length; i++) {
		for (let j = 0; j < newArray[i].length; j++) {
			rowsArray[i] += newArray[i][j];
			colsArray[i] += newArray[j][i];
		}
	}

	console.log(rowsArray);
	console.log(colsArray);

	const areRowsEqual = rowsArray.every((value) => value === rowsArray[0]);
	const areColsEqual = colsArray.every((value) => value === colsArray[0]);

	areColsEqual && areRowsEqual
		? console.log("Matrix is special!")
		: console.log("Matrix is not special!");
};

isMatrixSpecial(["4 5 6", "6 5 4", "5 5 5"]); // true
isMatrixSpecial(["1 0 0", "0 0 1", "0 1 0"]); // true
isMatrixSpecial(["1 2 3", "1 2 3", "1 2 3"]); // false
