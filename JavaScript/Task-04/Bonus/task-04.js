function calculateRoutes(towns, size = towns.length) {
	if (size > towns.length) return [];
	else if (size === 1) return towns.map((town) => [town]);

	return towns.flatMap((town) => {
		return calculateRoutes(
			towns.filter((t) => t !== town),
			size - 1
		).map((item) => [town, ...item]);
	});
}

const result = calculateRoutes(["A", "B", "C"]).map((array) => array.join(">"));

console.log(result);
