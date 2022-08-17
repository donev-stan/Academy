Option_1: {
	const findPerimeter = (circleOrSquare, radiusOrSide) => {
		return (
			(circleOrSquare === "s" && 4 * radiusOrSide) ||
			(circleOrSquare === "c" && 6.28 * radiusOrSide)
		);
	};
}

Option_2: {
	const findPerimeter = (circleOrSquare, radiusOrSide) => {
		return (r = eval(
			"circleOrSquare === 's' ? 4 * radiusOrSide : 6.28 * radiusOrSide;"
		));
	};
}

Option_3: {
	const findPerimeter = (circleOrSquare, radiusOrSide) => {
		return (
			(circleOrSquare === "c") * 6.28 * radiusOrSide +
			(circleOrSquare === "s") * radiusOrSide * 4
		);
	};

	console.log(findPerimeter("s", 7));
	console.log(findPerimeter("c", 4));
}
