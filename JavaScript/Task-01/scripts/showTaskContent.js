const showTaskContent = (event, taskNumber) => {
	const btn = event.target;

	setActiveBtn(btn);

	clearPreviousResults(taskNumber);

	clearActiveTask();

	setActiveTask(taskNumber);
};

const setActiveBtn = (btn) => {
	document
		.querySelectorAll(".show-task-btn")
		.forEach((btn) => btn.classList.remove("active"));

	btn.classList.add("active");
};

const clearPreviousResults = (taskNumber) => {
	document.querySelector(`${taskNumber}-result`).innerHTML = "";
};

const clearActiveTask = () => {
	document
		.querySelectorAll(".task")
		.forEach((div) => div.classList.remove("taskActive"));
};

const setActiveTask = (taskNumber) => {
	document.querySelector(taskNumber).classList.add("taskActive");
};
