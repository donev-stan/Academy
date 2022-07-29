/**
 *	Appends result to the result and history divs.
 *
 * @param {string} taskResultDiv - The className of the result div
 * @param {string} taskHistoryDiv - The className of the history div
 * @param {string} text -The result text to be appended
 */

const attachToDom = (taskResultDiv, taskHistoryDiv, text) => {
	// Append to result div
	const resultDiv = document.querySelector(taskResultDiv);
	resultDiv.textContent = text;

	// Append to histoy
	const historyDiv = document.querySelector(taskHistoryDiv);
	const historyItem = document.createElement("div");
	historyItem.classList.add("history-item");
	historyItem.textContent = text;

	historyDiv.appendChild(historyItem);
};

const saveToLocalStorage = () => {
	localStorage.setItem("taskHistory");
};
