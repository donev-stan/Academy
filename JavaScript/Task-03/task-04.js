const totalVolumeOfBoxes = (...arrays) => {
	let totalVolume = 0;

	// for (let i = 0; i < arrays.length; i++) {
	// 	totalVolume += arrays[i].reduce((a, b) => a * b);
	// }

	arrays.forEach((array) => (totalVolume += array.reduce((a, b) => a * b)));

	console.log(totalVolume);
};

totalVolumeOfBoxes([1, 2, 1], [2, 2, 2], [3, 1, 2]);
totalVolumeOfBoxes([2, 2, 2], [3, 2, 2]);
