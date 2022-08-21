const mainElements = {
	start_panel: () => document.querySelector(".start-panel"),
	play_panel: () => document.querySelector(".play-panel"),
};

const inputElements = {
	input_name: () => document.getElementById("name"),
	input_total_money: () => document.getElementById("total-money"),
	input_spin_money: () => document.getElementById("spin-money-start"),
};

const errorElements = {
	error_name: () => document.querySelector(".error-name"),
	error_total_money: () => document.querySelector(".error-total-money"),
	error_spin_money: () => document.querySelector(".error-spin-money"),
};

const playPanelElements = {
	total_money_result: () => document.getElementById("total-money-result"),
	input_spin_money: () => document.getElementById("spin-money"),
	spin_result: () => document.querySelector(".spin-result"),
};

const buttons = {
	startBtn: () => document.getElementById("start-game-btn"),
	exitBtn: () => document.getElementById("exit-game-btn"),
	spinBtn: () => document.getElementById("spin-btn"),
};

export {
	mainElements,
	inputElements,
	errorElements,
	playPanelElements,
	buttons,
};
