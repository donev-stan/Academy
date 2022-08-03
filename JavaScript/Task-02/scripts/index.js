(() => {
	document.querySelectorAll(".show-task-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			showTaskContent(btn, btn.dataset.task);
		});
	});
})();
