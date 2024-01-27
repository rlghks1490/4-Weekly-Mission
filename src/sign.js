const emailInput = document.querySelector("#user-email");
const emailErrorMessage = document.querySelector("#email-error-message");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const pwInput = document.querySelector("#password");
const pwErrorMessage = document.querySelector("#pw-error-message")
const signForm = document.querySelector("#form")




function setEmailError() {
  if(emailInput.value === "") {
    emailErrorMessage.textContent = '이메일을 입력해주세요'
  } else if(!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
  } else {
    emailErrorMessage.textContent = ''
  }
}

function setPwError() {
  if(pwInput.value === "") {
    pwErrorMessage.textContent = '비밀번호를 입력해주세요'
  } else {
    pwErrorMessage.textContent = ''
  }
}

function testUser(event) {
  event.preventDefault();

  if(emailInput.value === "test@codeit.com" && pwInput.value === "codeit101"){
    location.href = "index.html"
  } else {
    emailErrorMessage.textContent = '이메일을 확인해 주세요'
    pwErrorMessage.textContent = '비밀번호를 확인해 주세요'
  }
}



emailInput.addEventListener('focusout', setEmailError)
pwInput.addEventListener('focusout', setPwError)
signForm.addEventListener('submit', testUser)