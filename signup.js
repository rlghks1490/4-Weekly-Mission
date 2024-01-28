import {
  emailFormatCheck,
  passwordFormatCheck,
  togglePasswordEye,
  errorMessageVisibleAndTextChange,
  errorMessageHidden,
  USER_EMAIL,
} from "./utils.js";

const emailInput = document.querySelector(".sign-input");
const passwordInput = document.getElementById("password");
const checkPasswordInput = document.getElementById("checkPassword");
const emailErrorMessage = document.getElementById("emailErrorBox");
const passwordErrorMessage = document.getElementById("passwordErrorBox");
const checkPasswordErrorMessage = document.getElementById(
  "checkPasswordErrorBox"
);
const togglePasswordButton = document.getElementById("toggle-password");
const toggleCheckPasswordButton = document.getElementById(
  "toggle-check-password"
);
const form = document.querySelector(".sign-form");

function emailCheck(e) {
  if (emailInput.value === "") {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일을 입력해주세요."
    );
  } else if (!emailFormatCheck(emailInput.value)) {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일 형식이 올바르지 않습니다."
    );
  } else {
    errorMessageHidden(emailErrorMessage);
  }
}

function passwordCheck(e) {
  if (passwordInput.value === "") {
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
  } else if (!passwordFormatCheck(passwordInput.value)) {
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호 형식이 안맞습니다."
    );
  } else {
    errorMessageHidden(passwordErrorMessage);
  }
}

function passwordMatch(e) {
  if (checkPasswordInput.value === "") {
    errorMessageVisibleAndTextChange(
      checkPasswordErrorMessage,
      "비밀번호를 입력해주세요."
    );
  } else if (passwordInput.value !== checkPasswordInput.value) {
    errorMessageVisibleAndTextChange(
      checkPasswordErrorMessage,
      "비밀번호가 일치하지 않습니다."
    );
  } else {
    errorMessageHidden(checkPasswordErrorMessage);
  }
}

function onSubmitSignupForm(e) {
  e.preventDefault();
  let isValid = true;
  const email = emailInput.value;
  const password = passwordInput.value;
  const checkPassword = checkPasswordInput.value;
  if (!email) {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일을 입력해주세요."
    );
    isValid = false;
  } else if (!emailFormatCheck(email)) {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일 형식이 올바르지 않습니다."
    );
    isValid = false;
  } else if (email === USER_EMAIL) {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이미 가입된 이메일입니다."
    );
    isValid = false;
  } else {
    errorMessageHidden(emailErrorMessage);
  }

  if (!password) {
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    isValid = false;
  } else if (!passwordFormatCheck(password)) {
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호 형식이 올바르지 않습니다."
    );
    isValid = false;
  } else {
    errorMessageHidden(passwordErrorMessage);
  }

  if (!checkPassword) {
    errorMessageVisibleAndTextChange(
      checkPasswordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    isValid = false;
  } else if (password !== checkPassword) {
    errorMessageVisibleAndTextChange(
      checkPasswordErrorMessage,
      "비밀번호가 일치하지 않습니다."
    );
    isValid = false;
  } else {
    errorMessageHidden(checkPasswordErrorMessage);
  }

  if (isValid) {
    window.location.href = "success.html";
  }
}

emailInput.addEventListener("mouseout", emailCheck);
passwordInput.addEventListener("mouseout", passwordCheck);
checkPasswordInput.addEventListener("mouseout", passwordMatch);
togglePasswordButton.addEventListener("click", () =>
  togglePasswordEye(passwordInput, togglePasswordButton)
);
toggleCheckPasswordButton.addEventListener("click", () =>
  togglePasswordEye(checkPasswordInput, toggleCheckPasswordButton)
);
form.addEventListener("submit", onSubmitSignupForm);