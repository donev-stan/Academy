const getCarPrice = () => {
	let originalPrice;

	do {
		originalPrice = Number(prompt("Original price of vehicle", 10000));
	} while (isNaN(originalPrice) || originalPrice <= 0);

	let ageOfCar;

	do {
		ageOfCar = Number(prompt("Vehicle age", 2));
	} while (isNaN(ageOfCar) || ageOfCar < 0);

	let priceNow = calculateCarPrice(originalPrice, ageOfCar);

	document.querySelector(
		".task-10-result"
	).innerHTML = `Original price: ${originalPrice}lv <br/> Age: ${ageOfCar} <br/> Price now: ${priceNow}lv`;
};

const calculateCarPrice = (originalPrice, ageOfCar) => {
	if (ageOfCar < 3) {
		return originalPrice * (80 / 100);
	} else if (ageOfCar >= 3 && ageOfCar <= 10) {
		return originalPrice * (50 / 100);
	} else {
		return originalPrice * (30 / 100);
	}
};
