const elements = {
  loginBtn: () => document.getElementById("login-btn"),

  termsCheckbox: () => document.getElementById("terms-and-conditions"),
  termsErrorMsg: () => document.querySelector(".terms-error-msg"),

  passwordInput: () => document.getElementById("password"),
  passwordErrorMsg: () => document.querySelector(".password-error-msg"),

  usernameInput: () => document.getElementById("username"),
  usernameErrorMsg: () => document.querySelector(".username-error-msg"),

  container: () => document.querySelector(".container"),
};

export default elements;
