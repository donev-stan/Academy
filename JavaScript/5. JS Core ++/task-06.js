const gradesMap = {
	A: 6,
	B: 5,
	C: 4,
	D: 3,
	F: 2,
};

/*
option_one_with_objects: {
	const solve = (array) => {
		const allStudentsWithGrades = {};

		array.forEach((studentGrades, index) => {
			if (!allStudentsWithGrades.hasOwnProperty(`Student_${index}`)) {
				allStudentsWithGrades[`Student_${index}`] = [];
			}

			[...studentGrades].forEach((studentGrade) => {
				allStudentsWithGrades[`Student_${index}`].push(
					gradesMap[studentGrade]
				);
			});
		});

		console.log("All students with grades:");
		console.log(allStudentsWithGrades);

		const averageGrades = {};

		for (const key in allStudentsWithGrades) {
			averageGrades[key] = Math.round(
				allStudentsWithGrades[key].reduce((a, b) => a + b, 0) /
					allStudentsWithGrades[key].length
			);
		}

		console.log("Average Grades:");
		console.log(averageGrades);

		const allAverageGradesArray = Object.values(averageGrades);

		console.log("All Average Grades Array: ");
		console.log(allAverageGradesArray);

		const countOfAverageGrades = {
			"Mark A": 0,
			"Mark B": 0,
			"Mark C": 0,
			"Mark D": 0,
			"Mark F": 0,
		};

		allAverageGradesArray.forEach((numberGrade) => {
			const letterGrade = Object.keys(gradesMap).find(
				(key) => gradesMap[key] === numberGrade
			);

			countOfAverageGrades[`Mark ${letterGrade}`] =
				(countOfAverageGrades[`Mark ${letterGrade}`] || 0) + 1;
		});

		console.log("Count of Average Grades:");
		console.log(countOfAverageGrades);

		for (const key in countOfAverageGrades) {
			console.log(`${key} -> ${countOfAverageGrades[key]} people`);
		}
	};

	solve([
		"AABBAABAAAA",
		"ABAACAAADAA",
		"ABBCDAACDB",
		"BCFDCFDFBB",
		"FFFDFFFBFDF",
	]);
}
*/

// /*
option_two_with_array: {
	const solve = (arrayOfStudents) => {
		const averageGrades = [];

		arrayOfStudents.forEach((studentGrades, index) => {
			averageGrades.push([]);

			[...studentGrades].forEach((studentGrade) => {
				averageGrades[index].push(gradesMap[studentGrade]);
			});

			averageGrades[index] = Math.round(
				averageGrades[index].reduce((a, b) => a + b, 0) /
					averageGrades[index].length
			);
		});

		console.log(averageGrades);

		const count = {
			"Mark A": 0,
			"Mark B": 0,
			"Mark C": 0,
			"Mark D": 0,
			"Mark F": 0,
		};

		averageGrades.forEach((element) => {
			const letterGrade = Object.keys(gradesMap).find(
				(key) => gradesMap[key] === element
			);

			count[`Mark ${letterGrade}`] =
				(count[`Mark ${letterGrade}`] || 0) + 1;
		});

		console.log(count);

		for (const key in count) {
			console.log(`${key} -> ${count[key]}`);
		}
	};

	solve([
		"AABBAABAAAA",
		"ABAACAAADAA",
		"ABBCDAACDB",
		"BCFDCFDFBB",
		"FFFDFFFBFDF",
	]);
}
// */
