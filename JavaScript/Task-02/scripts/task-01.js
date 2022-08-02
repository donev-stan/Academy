const emailChange = () => {
	let email;

	do {
		email = prompt(
			"Please enter email address",
			"dimitar.trendafilov@gmail.com"
		);
	} while (email.trim().length === 0);

	const [name] = email.split("@");

	console.log(`${name}@novarto.com`);
};

// check if the input is not an email
