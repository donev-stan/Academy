const removeDuplicates = (array) => {
	let arrayWithoutDuplicates = [];

	array.forEach((element) => {
		if (!arrayWithoutDuplicates.includes(element))
			arrayWithoutDuplicates.push(element);
	});

	console.log(arrayWithoutDuplicates);
};

removeDuplicates([1, 0, 1, 0]);
removeDuplicates(["Dimitar", "Ivan", "Ivan", "Vasil", "Niki"]);
