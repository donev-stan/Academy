function onFormSubmit(event, form) {
	// To stop the page from refreshing since thats the default behavior when a form is submitted
	event.preventDefault();

	const { day, date, timeStart, timeEnd, topic, draft, terms } = form;

	const data = {
		date: date.value,
		timeStart: timeStart.value,
		timeEnd: timeEnd.value,
		topic: topic.value,
	};

	// Check for errors
	let error = false;
	Object.entries(data).map(([key, value]) => {
		if (value === "") {
			form[key].classList.add("error");
			form[key].classList.remove("good");
			error = true;
			console.log(value);
		}
	});

	if (!terms.checked) {
		error = true;
		document.getElementById("terms-error").removeAttribute("hidden");
	}

	// So it does not append an empty string
	if (error) return;

	// Select Table Body
	const tbody = document.querySelector("tbody");

	// Create Table Row
	const tr = document.createElement("tr");

	// Iterate through the data object
	Object.entries(data).map(([key, value]) => {
		// Create Table Data (Column)
		const td = document.createElement("td");

		if (key === "date") {
			td.innerHTML = `${day.value} <br> <b>${value}</b>`;
		} else {
			// Set Table Data (Column)
			td.innerHTML = value;
		}

		// Append Table Data (Column) to Table Row
		tr.appendChild(td);
	});

	// Append Table Row to Table Body
	tbody.appendChild(tr);

	// Clear Inputs
	document.querySelector("form").reset();
}

function onInputChange(event) {
	if (event.target.type === "checkbox") {
		document.getElementById("terms-error").setAttribute("hidden", "hidden");
	} else {
		event.target.classList.add("good");
	}
}