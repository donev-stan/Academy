import { elements, errorElements } from "./domElements.js";

const register = (e) => {
	e.preventDefault();

	const error = checkForErrors();
	if (error) return;

	elements.box().innerHTML = `Successfully registered!`;
	elements.box().style.padding = "100px";
	elements.box().style.fontSize = "2rem";
};

const checkForErrors = () => {
	let error = false;

	const [firstName, lastName, tel, zip, country] = getInputValues();

	// Name Check
	if (firstName === "") {
		errorElements.firstNameError().style.display = "flex";
		elements.firstNameInput().classList.add("input-error");
		error = true;
	}

	if (lastName === "") {
		errorElements.lastNameError().style.display = "flex";
		elements.lastNameInput().classList.add("input-error");
		error = true;
	}

	// Telephone Check
	const telDigits = tel.split("");

	if (telDigits.length === 0) {
		errorElements.telError().style.display = "flex";
		elements.telInput().classList.add("input-error");
		error = true;
	}

	telDigits.forEach((number) => {
		if (isNaN(Number(number))) {
			errorElements.telError().style.display = "flex";
			elements.telInput().classList.add("input-error");
			error = true;
		}
	});

	// ZIP Code Check
	const zipDigits = zip.split("");

	if (zipDigits.length === 0) {
		errorElements.zipError().style.display = "flex";
		elements.zipInput().classList.add("input-error");
		error = true;
	}

	zipDigits.forEach((number) => {
		if (isNaN(Number(number))) {
			errorElements.zipError().style.display = "flex";
			elements.zipInput().classList.add("input-error");
			error = true;
		}
	});

	// // Country Check
	// if (!countries.includes(country.toLowerCase())) {
	// 	errorElements.countryError().style.display = "flex";
	// }

	return error;
};

const getInputValues = () => {
	return [
		elements.firstNameInput().value.trim(),
		elements.lastNameInput().value.trim(),
		elements.telInput().value.trim(),
		elements.zipInput().value.trim(),
		elements.countryInput().value.trim(),
	];
};

elements.registerBtn().addEventListener("click", register);

elements.firstNameInput().addEventListener("input", () => {
	elements.firstNameInput().classList.remove("input-error");
	errorElements.firstNameError().style.display = "none";
});

elements.lastNameInput().addEventListener("input", () => {
	elements.lastNameInput().classList.remove("input-error");
	errorElements.lastNameError().style.display = "none";
});

elements.telInput().addEventListener("input", () => {
	elements.telInput().classList.remove("input-error");
	errorElements.telError().style.display = "none";
});

elements.zipInput().addEventListener("input", () => {
	elements.zipInput().classList.remove("input-error");
	errorElements.zipError().style.display = "none";
});

// const countries = ["bulgaria", "romania", "germany", "greece", "united kingdom", "united states"];
