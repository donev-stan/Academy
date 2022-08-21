import { mainElements, buttons } from "./elements.js";
import verifyInputData from "./inputData.js";
import spinMachine from "./spinMachine.js";

(() => {
	buttons.startBtn().addEventListener("click", () => startGame());
	buttons.exitBtn().addEventListener("click", () => switchPanels("exit"));
	buttons.spinBtn().addEventListener("click", () => spinMachine());
})();

const startGame = () => {
	const { status, data } = verifyInputData();
	if (!status) return;

	spinMachine(data.spin_money, data.total_money);

	switchPanels("start");
};

const switchPanels = (swtch) => {
	if (swtch === "start") {
		mainElements.start_panel().style.display = "none";
		mainElements.play_panel().style.display = "flex";
	} else if (swtch === "exit") {
		mainElements.start_panel().style.display = "flex";
		mainElements.play_panel().style.display = "none";
	}
};
