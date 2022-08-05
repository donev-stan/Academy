const sortArray = (array, sortType) => {
	switch (sortType) {
		case "ASC":
			array.sort((a, b) => a - b);
			break;

		case "DESC":
			array.sort((a, b) => b - a);
			break;

		default:
			break;
	}

	console.log(array);
};

sortArray([5, 1, 9, 4, 9, 2, 3], "ASC");
sortArray([5, 1, 9, 4, 9, 2, 3], "DESC");
sortArray([5, 1, 9, 4, 9, 2, 3], "SODHFOSIDHFOS");
