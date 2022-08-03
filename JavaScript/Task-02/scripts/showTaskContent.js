const showTaskContent = (btn, taskNumber) => {
	clearActiveBtn();
	setActiveBtn(btn);

	clearActiveTask();
	setActiveTask(taskNumber);

	clearPreviousResults(taskNumber);
};

const clearActiveBtn = () => {
	return document
		.querySelectorAll(".show-task-btn")
		.forEach((btn) => btn.classList.remove("active"));
};

const setActiveBtn = (btn) => {
	return btn.classList.add("active");
};

const clearActiveTask = () => {
	return document
		.querySelectorAll(".task")
		.forEach((div) => div.classList.remove("taskActive"));
};

const setActiveTask = (taskNumber) => {
	return document.querySelector(taskNumber).classList.add("taskActive");
};

const clearPreviousResults = (taskNumber) => {
	return (document.querySelector(`${taskNumber}-result`).innerHTML = "");
};
