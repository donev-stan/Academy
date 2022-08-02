const moreDistantDate = () => {
	let dateOne = new Date("08/11/2022").toLocaleDateString();
	let dateTwo = new Date("09/11/2022").toLocaleDateString();

	const [dayFirstDate, monthFirstDate, yearFirstDate] = dateOne
		.split("/")
		.map((date) => Number(date));

	const [daySecondDate, monthSecondDate, yearSecondDate] = dateTwo
		.split("/")
		.map((date) => Number(date));

	// checkMoreDistantDate(dateOne, dateTwo);

	if (yearFirstDate === yearSecondDate) {
		// check months
		if (monthFirstDate === monthSecondDate) {
			// check days
			if (dayFirstDate === daySecondDate) {
				// dates are equal
				console.log(dateOne);
			} else {
				if (dayFirstDate < daySecondDate) {
					// daySecondDate WINS
					console.log(dateTwo);
				} else {
					// dayFirstDate WINS
					console.log(dateOne);
				}
			}
		} else {
			if (monthFirstDate < monthSecondDate) {
				// monthSecondDate WINS
				console.log(dateTwo);
			} else {
				// monthFirstDate WINS
				console.log(dateOne);
			}
		}
	} else {
		if (yearFirstDate < yearSecondDate) {
			// yearSecondDate WINS
			console.log(dateTwo);
		} else {
			// yearFirstDate WINS
			console.log(dateOne);
		}
	}
};
