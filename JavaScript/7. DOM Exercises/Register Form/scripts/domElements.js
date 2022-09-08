const elements = {
	registerBtn: () => document.getElementById("register-btn"),

	countryInput: () => document.getElementById("country"),
	zipInput: () => document.getElementById("zip"),
	telInput: () => document.getElementById("tel"),
	lastNameInput: () => document.getElementById("last-name"),
	firstNameInput: () => document.getElementById("first-name"),

	box: () => document.querySelector(".register-form-box"),
};

const errorElements = {
	firstNameError: () => document.querySelector(".first-name-error-msg"),
	lastNameError: () => document.querySelector(".last-name-error-msg"),
	telError: () => document.querySelector(".tel-error-msg"),
	zipError: () => document.querySelector(".zip-error-msg"),
	countryError: () => document.querySelector(".country-error-msg"),
};

export { elements, errorElements };
