const showTaskContent = (event, taskNumber) => {
	setActiveBtn(event.target);
	clearActiveTask();
	setActiveTask(taskNumber);
	clearPreviousResults(taskNumber);
	loadHistory(taskNumber);
};

const setActiveBtn = (btn) => {
	document
		.querySelectorAll(".show-task-btn")
		.forEach((btn) => btn.classList.remove("active"));

	btn.classList.add("active");
};

const clearActiveTask = () => {
	document
		.querySelectorAll(".task")
		.forEach((div) => div.classList.remove("taskActive"));
};

const setActiveTask = (taskNumber) => {
	document.querySelector(taskNumber).classList.add("taskActive");
};

const clearPreviousResults = (taskNumber) => {
	document.querySelector(`${taskNumber}-result`).innerHTML = "";
};

const loadHistory = (taskNumber) => {
	if (historyResults) {
		const historyTask =
			historyResults[`${taskNumber.substring(1)}-history`];

		if (historyTask.length !== 0) {
			document.querySelector(`${taskNumber}-history`).innerHTML = "";

			historyTask.map((historyItem) => {
				attachToHistoryDiv(`${taskNumber}-history`, historyItem);
			});
		}
	}
};
