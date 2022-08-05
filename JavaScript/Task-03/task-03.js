const sumOfNums = (array) => {
	let sum = 0;

	array.forEach((element) => {
		if (typeof element === "number") {
			sum += element;
		}
	});

	console.log(sum);
};

sumOfNums([1, 2, "3", true]);
sumOfNums([1, 2, 3, true, false, "5", 2, [10]]);
