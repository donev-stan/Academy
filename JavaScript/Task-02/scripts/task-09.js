const prepareBolognese = () => {
	let pplCount;

	do {
		pplCount = Number(prompt("How many people "));
	} while (isNaN(pplCount) || pplCount <= 0);

	console.log(pplCount);

	let totalTime = 0;

	const pastaPackageCount = Math.ceil(pplCount / 4);

	const waterLitersNeeded = pastaPackageCount * 2;

	const boilWaterTime = waterLitersNeeded * 10;

	const pastaBoilTime = 10;

	totalTime += boilWaterTime + pastaBoilTime;

	if (totalTime < 30) totalTime += 30 - totalTime;

	console.log(totalTime);
};
