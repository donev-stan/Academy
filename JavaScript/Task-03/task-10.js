const progressDays = (array) => {
	let progressDays = 0;

	array.reduce((previousValue, currentValue) => {
		if (currentValue > previousValue) progressDays++;
		return currentValue;
	});

	console.log(progressDays);
};

progressDays([10, 11, 12, 9, 10]); // => 3 progress days
progressDays([3, 4, 1, 2]); // => 2 progress days
progressDays([6, 5, 4, 3, 2, 9]); // => 1 progress days
progressDays([5, 5]); // => 0 progress days
