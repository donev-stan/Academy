import elements from "./domElements.js";
import loginFunc from "./login.js";

elements.loginBtn().addEventListener("click", loginFunc);

elements.usernameInput().addEventListener("input", () => {
	elements.usernameInput().classList.remove("input-error");
	elements.usernameErrorMsg().style.display = "none";
});

elements.passwordInput().addEventListener("input", () => {
	elements.passwordInput().classList.remove("input-error");
	elements.passwordErrorMsg().style.display = "none";
});

elements.termsCheckbox().addEventListener("change", () => {
	elements.termsErrorMsg().style.display = "none";
});
