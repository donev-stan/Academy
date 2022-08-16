const numbers = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
};

const operators = {
	plus: "+",
	minus: "-",
	multiply: "*",
	division: "/",
};

const solve = (string) => {
	const [firstNumAsWord, operatorAsWord, secondNumAsWord] = string.split(" ");

	const firstNum = numbers[firstNumAsWord];
	const operator = operators[operatorAsWord];
	const secondNum = numbers[secondNumAsWord];

	const equasion = `${firstNum} ${operator} ${secondNum}`;

	// const result = eval(equasion);
	const result = new Function("return " + equasion)();
	// Or I could use a switch statement...

	console.log(
		`First Number: ${firstNum} | Second Number: ${secondNum} | Operator: ${operator} | Result: ${result}`
	);
};

solve("eight division two");
