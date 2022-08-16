const map = {
	а: "12",
	д: "а",
	и: ")",
	п: "е",
	т: "%",
	ю: "в",
	я: "й",
};

const cryptMessage = (message) => {
	const result = [];

	for (let i = 0; i < message.length; i++) {
		const element = message[i];

		if (map.hasOwnProperty(element)) {
			result.push(map[element]);
		} else {
			result.push(element);
		}
	}

	return result.join("");
};

const cryptedMsg = cryptMessage("нападаме по южната граница на германия");

console.log(cryptedMsg);
