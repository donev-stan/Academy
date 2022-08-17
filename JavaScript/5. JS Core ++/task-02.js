const flattenArray = (array, result = []) => {
	array.forEach((element) => {
		if (Array.isArray(element)) {
			return flattenArray(element, result);
		} else {
			result.push(element);
		}
	});

	return result;
};

const result_one = flattenArray([1, 2, [3, 4, [5, 6, 7, [8, 9]], 10, 11]]);
const result_two = flattenArray([1, 2, 3, [4, 5, 6, [7, 8, 9]]]);
const result_three = flattenArray([1, 2, 3, [4, 5, 6]]);

console.log(result_one);
console.log(result_two);
console.log(result_three);
