const showTaskContent = (event, taskNumber) => {
	const btn = event.target;

	setActiveBtn(btn);

	clearPreviousResults(taskNumber);

	clearActiveTask();

	setActiveTask(taskNumber);

	loadHistory(taskNumber);
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
