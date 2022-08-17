const solve = (array) => {
	const goods = [...array];

	const pattern = [];

	let bowls = 0;
	let glasses = 0;
	let pens = 0;

	find_bowls: {
		for (let i = 0; i < goods.length; i++) {
			pattern.push(goods[i]);
			// console.log(pattern);

			if (pattern.length === 2) {
				if (!(pattern[1] < pattern[0]))
					pattern.splice(0, pattern.length - 1);
			}

			if (pattern.length === 3) {
				if (!(pattern[2] === pattern[1]))
					pattern.splice(0, pattern.length - 2);
			}

			if (pattern.length === 4) {
				if (pattern[3] === pattern[0]) {
					bowls += 1;
					pattern.splice(0, pattern.length); // clear pattern
					goods.splice(i - 3, 4); // remove the bowl
				} else {
					pattern.splice(0, pattern.length - 1);
				}
			}
		}
	}

	pattern.splice(0, pattern.length - 1);

	find_glasses: {
		for (let i = 0; i < goods.length; i++) {
			const element = goods[i];

			pattern.push(element);
			// console.log(pattern);

			if (pattern[1] < pattern[0]) pattern.splice(0, pattern.length - 1);

			if (pattern[0] === pattern[2] && pattern[1] > pattern[0]) {
				glasses += 1;
				pattern.splice(0, pattern.length); // clear pattern
				goods.splice(i - 2, 3); // remove the glasses
			} else {
				if (pattern[1] > pattern[0]) {
					pattern.splice(0, pattern.length - 2);
				} else {
					pattern.splice(0, pattern.length - 1);
				}
			}
		}
	}

	pattern.splice(0, pattern.length - 1);

	find_pens: {
		for (let i = 0; i < goods.length; i++) {
			if (goods[i] === 1 && goods[i + 1] === 9) pens += 1;
		}
	}

	const totalProducts = bowls + glasses + pens;

	console.log(
		`Delivered ${totalProducts} new products! Pens: ${pens}, Glasses: ${glasses}, Bowls: ${bowls}`
	);
};

solve([3, 4, 1, 9, 6, 9, 3, 9, 6, 2, 2, 6, 1, 9, 1, 3, 4, 1, 9]);
// solve([3, 4, 1, 9, 6, 9, 3, 9, 6, 2, 2, 6, 1, 9, 1, 3, 4, 1, 9, 8, 7, 7, 8]);
