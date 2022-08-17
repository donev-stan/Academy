const emailChange = () => {
	let email;

	email = document.querySelector("[name='email-input']").value;

	const goodToGo = emailInputValidation(email);

	if (!goodToGo) return;

	const [name] = email.split("@");

	document.querySelector(
		".task-01-result"
	).innerHTML = `Input: ${email} <br/> Edited: ${name}@novarto.com`;
};

// check if the input is not an email
const emailInputValidation = (email) => {
	if (email.search("@") === -1) {
		document.querySelector(
			".error-message.task-01"
		).innerHTML = `Please enter a valid email address!`;

		document
			.querySelector("[name='email-input']")
			.classList.add("error-input");

		return false;
	}

	document.querySelector(".error-message.task-01").innerHTML = ``;

	document
		.querySelector("[name='email-input']")
		.classList.remove("error-input");

	document.querySelector("[name='email-input']").value = "";

	return true;
};
