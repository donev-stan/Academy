const moreDistantDate = () => {
	// let dateOne = new Date("08/11/2022").toLocaleDateString();
	// let dateTwo = new Date("09/11/2022").toLocaleDateString();

	let dateOne;

	do {
		dateOne = prompt("Enter date", "08/11/2022");
	} while (dateOne?.trim() && dateOne.trim().split("/").length !== 3);

	if (!dateOne) return;

	let dateTwo;

	do {
		dateTwo = prompt("Enter date", "09/11/2022");
	} while (dateTwo?.trim() && dateTwo.trim().split("/").length !== 3);

	if (!dateTwo) return;

	const [dayFirstDate, monthFirstDate, yearFirstDate] = dateOne
		.split("/")
		.map((date) => Number(date));

	const [daySecondDate, monthSecondDate, yearSecondDate] = dateTwo
		.split("/")
		.map((date) => Number(date));

	let result;

	if (yearFirstDate === yearSecondDate) {
		// check months
		if (monthFirstDate === monthSecondDate) {
			// check days
			if (dayFirstDate === daySecondDate) {
				// dates are equal
				result = dateOne;
				console.log(dateOne);
			} else {
				if (dayFirstDate < daySecondDate) {
					// daySecondDate WINS
					result = dateTwo;
					console.log(dateTwo);
				} else {
					// dayFirstDate WINS
					result = dateOne;
					console.log(dateOne);
				}
			}
		} else {
			if (monthFirstDate < monthSecondDate) {
				// monthSecondDate WINS
				result = dateTwo;
				console.log(dateTwo);
			} else {
				// monthFirstDate WINS
				result = dateOne;
				console.log(dateOne);
			}
		}
	} else {
		if (yearFirstDate < yearSecondDate) {
			// yearSecondDate WINS
			result = dateTwo;
			console.log(dateTwo);
		} else {
			// yearFirstDate WINS
			result = dateOne;
			console.log(dateOne);
		}
	}

	document.querySelector(
		".task-07-result"
	).innerHTML = `First Date: ${dateOne} <br/> Second Date: ${dateTwo} <br/> Date Further: ${result}`;
};
