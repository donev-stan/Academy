const prepareBolognese = () => {
	let pplCount;

	do {
		pplCount = prompt("How many people ");

		console.log(isNaN(pplCount));
	} while (isNaN(pplCount) || pplCount?.trim().length === 0);

	pplCount = Number(pplCount);

	if (!pplCount) return;

	let totalTime = 0;

	const pastaPackageCount = Math.ceil(pplCount / 4);

	const waterLitersNeeded = pastaPackageCount * 2;

	const boilWaterTime = waterLitersNeeded * 10;

	const pastaBoilTime = 10;

	totalTime += boilWaterTime + pastaBoilTime;

	if (totalTime < 30) totalTime += 30 - totalTime;

	document.querySelector(
		".task-09-result"
	).innerHTML = `Number of people: ${pplCount} <br/> Pasta Packages Needed: ${pastaPackageCount} <br/> Water Liters Needed: ${waterLitersNeeded} <br/> Time for water to boil: ${boilWaterTime} min <br/> Time for Pasta to boil: ${pastaBoilTime} min <br/> Total time: ${totalTime} minutes`;
};
