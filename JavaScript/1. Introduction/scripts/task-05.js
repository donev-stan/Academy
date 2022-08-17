const gradeStudent = () => {
	let score;

	do {
		score = prompt("Please enter student score", 0);
	} while (isNaN(score) || score > 100 || score < 0);

	if (!score) return;

	score = Number(score);

	const resultDiv = document.querySelector(".task-05-result");

	let resultText;

	if (score >= 0 && score <= 40) {
		resultText = `Score is ${score} and the grade is F (2)`;
	} else if (score >= 41 && score <= 60) {
		resultText = `Score is ${score} and the grade is D (3)`;
	} else if (score >= 61 && score <= 80) {
		resultText = `Score is ${score} and the grade is C (4)`;
	} else if (score >= 81 && score <= 90) {
		resultText = `Score is ${score} and the grade is B (5)`;
	} else if (score >= 91 && score <= 100) {
		resultText = `Score is ${score} and the grade is A (6)`;
	}

	attachToDom(".task-05-result", ".task-05-history", resultText);
};
