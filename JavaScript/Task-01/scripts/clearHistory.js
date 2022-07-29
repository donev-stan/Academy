const clearHistory = (taskHistory) => {
	document.querySelector(taskHistory).textContent = "";

	historyResults[taskHistory.substring(1)] = [];
	localStorage.setItem("history-results", JSON.stringify(historyResults));
};
