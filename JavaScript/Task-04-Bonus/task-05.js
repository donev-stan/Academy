// Done

const findPerimeter = (circleOrSquare, radiusOrSide) => {
	return (
		(circleOrSquare === "s" && 4 * radiusOrSide) ||
		(circleOrSquare === "c" && 6.28 * radiusOrSide)
	);
};

console.log(findPerimeter("s", 7));
console.log(findPerimeter("c", 4));
