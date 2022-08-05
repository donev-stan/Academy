const checkIsElementSpecial = (element, index) => {
	return (
		(index % 2 === 0 && element % 2 === 0) ||
		(index % 2 === 1 && element % 2 === 1)
	);
};
const isTheArraySpecial = (array) => array.every(checkIsElementSpecial);

console.log(isTheArraySpecial([0, 1, 2]));
console.log(isTheArraySpecial([0, 1, 2, 2]));
