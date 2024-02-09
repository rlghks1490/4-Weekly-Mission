const emailInput = document.querySelector(".LoginInputEmail");
const pwInput = document.querySelector(".SignUpPwInput");
const pwCorrectInput = document.querySelector(".SignUpPwCorrectInput");
const eyeIcon = document.querySelector(".eye-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const emailError = document.querySelector(".LoginEmailError");
const pwError = document.querySelector(".LoginPwError");
const pwCorrectError = document.querySelector(".LoginPwCorrectError");

// 비밀번호 토글 이벤트
function toggleEyePw(event) {
  event.preventDefault();
  console.log("toggleEyePw function called");
  const type = pwInput.getAttribute("type");
  if (type === "password") {
    pwInput.setAttribute("type", "password");
    eyeIcon.src = "./images/eye-on.svg";
  } else {
    pwInput.setAttribute("type", "text");
    eyeIcon.src = "./images/eye-off.svg";
  }
}

// 이메일 유효성 검사
function isValidEmail(email) {
  return emailRegex.test(email);
}

// 비밀번호 유효성 검사 (영문, 숫자 조합 8자 이상)
function isValidPassword(password) {
  return passwordRegex.test(password);
}

// 이메일 입력 검사
function validateEmail() {
  let emailValue = emailInput.value.trim();
  if (!emailValue) {
    showError(emailError, "이메일을 입력해 주세요.");
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, "올바른 이메일 주소가 아닙니다.");
  } else if (emailValue === "test@codeit.com") {
    showError(emailError, "이미 사용 중인 이메일입니다.");
  } else {
    hideError(emailError);
  }
}

// 비밀번호 입력 검사
function validatePassword() {
  let passwordValue = pwInput.value.trim();
  if (!passwordValue) {
    showError(pwError, "비밀번호를 입력해 주세요.");
  } else if (!isValidPassword(passwordValue)) {
    showError(pwError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else {
    hideError(pwError);
  }
}

// 비밀번호 일치 검사
function correctPassword() {
  let passwordValue1 = pwInput.value.trim();
  let passwordValue2 = pwCorrectInput.value.trim();
  if (passwordValue1 !== passwordValue2) {
    showError(pwCorrectError, "비밀번호가 일치하지 않아요.");
  } else {
    hideError(pwCorrectError);
  }
}

// error 보여줌
function showError(element, message) {
  element.textContent = message;
  element.style.display = "block";
  if (element.classList.contains("LoginEmailError")) {
    element.previousElementSibling.style.border = "1px solid red";
  } else if (element.classList.contains("LoginPwError")) {
    const passwordInput =
      element.previousElementSibling.querySelector(".SignUpPwInput");
    if (passwordInput) {
      passwordInput.style.border = "1px solid red";
    }
  } else if (element.classList.contains("LoginPwCorrectError")) {
    const correctInput = element.previousElementSibling.querySelector(
      ".SignUpPwCorrectInput"
    );
    if (correctInput) {
      correctInput.style.border = "1px solid red";
    }
  }
}

function hideError(element) {
  // 요소를 지우고 싶지만 공간은 두고싶은 경우
  element.textContent = "";
  // 요소를 지우고 공간도 지우고 싶은 경우
  element.style.display = "none";
  if (element.classList.contains("LoginEmailError")) {
    element.previousElementSibling.style.border = "";
  } else if (element.classList.contains("LoginPwError")) {
    const passwordInput =
      element.previousElementSibling.querySelector(".SignUpPwInput");
    if (passwordInput) {
      passwordInput.style.border = "";
    }
  } else if (element.classList.contains("LoginPwCorrectError")) {
    const correctInput = element.previousElementSibling.querySelector(
      ".SignUpPwCorrectInput"
    );
    if (correctInput) {
      correctInput.style.border = "";
    }
  }
}

// Enter키로 회원가입
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".LoginBtn").click();
  }
});

// 이메일 중복 확인
async function dupliEmail(email) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// 회원가입 요청
async function signUp(email, password, passwordcheck) {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      paswordcheck: passwordcheck,
    }),
  });
  return response.ok;
}

// focusout 되었을 때 emailInput, pwInput에서 validateEmail, validatePw검사
emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePassword);
pwCorrectInput.addEventListener("focusout", correctPassword);

const loginForm = document.querySelector(".LoginBtn");

// 오류 메시지 표시 함수
function showSignUpError(message) {
  showError(emailError, message);
  showError(pwError, message);
  showError(pwCorrectError, message);
}
loginForm.addEventListener("click", async function (event) {
  event.preventDefault();

  validateEmail();
  validatePassword();
  correctPassword();

  let emailValue = emailInput.value.trim();
  let passwordValue = pwInput.value.trim();
  let passwordValue2 = pwCorrectInput.value.trim();

  try {
    const emailCheck = await dupliEmail(emailValue);
    if (emailCheck.isDuplicated) {
      showError(emailError, "이미 사용 중인 이메일입니다.");
      return;
    }

    const signUpResult = await signUp(
      emailValue,
      passwordValue,
      passwordValue2
    );
    if (signUpResult) {
      window.location.href = "/folder";
      return;
    } else {
      // 올바른 형식 아닌 경우
      showSignUpError("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  } catch (error) {
    // 요청 문제
    console.log("Error during sign up:", error);
    showSignUpError("요청 중 문제가 발생하였습니다.");
  }
});