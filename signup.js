import { printEmailError } from "./common.js";

const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const rePasswordInput = document.querySelector(".check-password");
const form = document.querySelector(".sign-form");
const emailMessage = document.createElement("div");
const passwordMessage = document.createElement("div");
const rePasswordMessage = document.createElement("div");
const eyeBtn = document.querySelectorAll(".eye-button");

emailMessage.classList.add("error-message");
passwordMessage.classList.add("error-message");
rePasswordMessage.classList.add("error-message");

const handleFocusoutEmail = () => {
  printEmailError(emailMessage, emailInput);
};

const isValidPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str);
};

const handleFocusoutPassword = () => {
  passwordMessage.classList.remove("error-style");
  if (!isValidPassword(passwordInput.value)) {
    passwordInput.after(passwordMessage);
    passwordMessage.textContent =
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
    passwordInput.style.border = "1px solid #ff5b45";
  } else {
    passwordMessage.classList.add("error-style");
    return true;
  }
};

const handleFocusoutRePassword = () => {
  rePasswordMessage.classList.remove("error-style");
  if (rePasswordInput.value !== passwordInput.value) {
    rePasswordInput.after(rePasswordMessage);
    rePasswordMessage.textContent = "비밀번호가 일치하지 않아요.";
    rePasswordInput.style.border = "1px solid #ff5b45";
  } else {
    rePasswordMessage.classList.add("error-style");
    return true;
  }
};

const handleClickBtn = (e) => {
  e.preventDefault();
  if (
    handleFocusoutEmail() &&
    handleFocusoutPassword() &&
    handleFocusoutRePassword()
  ) {
    location.href = "./folder.html";
  }
};
const showPw = () => {
  passwordInput.setAttribute("type", "text");
  rePasswordInput.setAttribute("type", "text");
  eyeBtn.forEach((v) => {
    return (v.style.display = "none");
  });
};

emailInput.addEventListener("focusout", handleFocusoutEmail);
passwordInput.addEventListener("focusout", handleFocusoutPassword);
rePasswordInput.addEventListener("focusout", handleFocusoutRePassword);
form.addEventListener("submit", handleClickBtn);
eyeBtn[0].addEventListener("click", showPw);
eyeBtn[1].addEventListener("click", showPw);