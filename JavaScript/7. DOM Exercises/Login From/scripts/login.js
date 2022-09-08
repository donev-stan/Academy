import elements from "./domElements.js";

const loginFunc = (e) => {
	e.preventDefault();

	const termsChecked = elements.termsCheckbox().checked;
	const usernameValue = elements.usernameInput().value;
	const passwordValue = elements.passwordInput().value;

	let error = false;
	if (usernameValue.trim() === "") {
		elements.usernameInput().classList.add("input-error");
		elements.usernameErrorMsg().style.display = "flex";
		error = true;
	}

	if (passwordValue.trim() === "") {
		elements.passwordInput().classList.add("input-error");
		elements.passwordErrorMsg().style.display = "flex";
		error = true;
	}

	if (termsChecked === false) {
		elements.termsErrorMsg().style.display = "flex";
		error = true;
	}

	if (error) return;

	elements.container().innerHTML = "Login Successful!";
	elements.container().style.padding = "100px";
	elements.container().style.fontSize = "2rem";
};

export default loginFunc;
