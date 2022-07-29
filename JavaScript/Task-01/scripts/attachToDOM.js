/**
 *	Appends result to the result and history divs.
 *
 * @param {string} taskResultDiv - The className of the result div
 * @param {string} taskHistoryDiv - The className of the history div
 * @param {string} text - The result text to be appended
 */

const attachToDom = (taskResultDiv, taskHistoryDiv, text) => {
	attachToResultDiv(taskResultDiv, text);
	attachToHistoryDiv(taskHistoryDiv, text);

	historyResults[taskHistoryDiv.substring(1)].push(text);
	localStorage.setItem("history-results", JSON.stringify(historyResults));
};

const attachToResultDiv = (taskResultDiv, text) => {
	// Append to result div
	const resultDiv = document.querySelector(taskResultDiv);
	resultDiv.innerHTML = text;
};

/**
 *
 * @param {string} taskHistoryDiv - The className of the history div
 * @param {string} text - The result text to be appended
 */
const attachToHistoryDiv = (taskHistoryDiv, text) => {
	// Append to history
	const historyDiv = document.querySelector(taskHistoryDiv);
	const historyItem = document.createElement("div");
	historyItem.classList.add("history-item");
	historyItem.innerHTML = text;

	historyDiv.appendChild(historyItem);
};
