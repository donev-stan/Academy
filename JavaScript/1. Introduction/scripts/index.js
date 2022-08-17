window.onload = () => {
	// window.historyResults = JSON.parse(localStorage.getItem("history-results"));
	const results = JSON.parse(localStorage.getItem("history-results"));

	results
		? (window.historyResults = results)
		: (window.historyResults = {
				"task-01-history": [],
				"task-02-history": [],
				"task-03-history": [],
				"task-04-history": [],
				"task-05-history": [],
				"task-06-history": [],
				"task-07-history": [],
				"task-08-history": [],
				"task-09-history": [],
				"task-10-history": [],
				"task-11-history": [],
		  });
};
