function compareProperties(cards) {
	const properties = ["color", "number", "shade", "shape"];
	let validPropertiesCount = 0;

	properties.forEach((property) => {
		let values = [];

		cards.forEach((card) => {
			values.push(card[property]);
		});

		if (confirmAllEqual(values) || confirmAllDifferent(values)) {
			validPropertiesCount++;
		}
	});

	return validPropertiesCount === properties.length;

	function confirmAllEqual(values) {
		return values.every((value) => value === values[0]);
	}

	function confirmAllDifferent(values) {
		let valuesSet = new Set(values);
		return valuesSet.size === values.length;
	}
}

console.log(
	compareProperties([
		{ color: "purple", number: 3, shade: "full", shape: "oval" },
		{ color: "green", number: 3, shade: "full", shape: "oval" },
		{ color: "red", number: 3, shade: "full", shape: "oval" },
	])
);
