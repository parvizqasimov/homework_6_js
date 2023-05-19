const form = document.getElementById("form");
const usernameErrorWrapper = document.getElementById("username-error");
const emailErrorWrapper = document.getElementById("email-error");
const passwordErrorWrapper = document.getElementById("password-error");
const confirmPasswordErrorWrapper = document.getElementById("confirm-password-error");
const submitUI = document.getElementById("submit-ui");

let username = form.querySelector(".usernameInput");
let email = form.querySelector(".emailInput");
let password = form.querySelector(".passwordInput");
let confirmPassword = form.querySelector(".confirmPasswordInput");

form.addEventListener("submit", (e) => handleSubmitForm (e));

function handleSubmitForm(e) {
  e.preventDefault();

  let usernameVal = username.value;
  let emailVal = email.value;
  let passwordVal = password.value;
  let confirmPasswordVal = confirmPassword.value;

  let formData = {
    username: usernameVal,
    email: emailVal,
    password: passwordVal,
    confirmPassword: confirmPasswordVal,
  };

  usernameErrorWrapper.innerText = "";
  emailErrorWrapper.innerText = "";
  passwordErrorWrapper.innerText = "";
  confirmPasswordErrorWrapper.innerText = "";

  let isValid = true;

  if (usernameVal.length < 3 || usernameVal.length > 15) {
    usernameErrorWrapper.innerText = "Username should be between 3 and 15 characters";
    isValid = false;
  }

  if (!isValidEmail(emailVal)) {
    emailErrorWrapper.innerText = "Invalid email format";
    isValid = false;
  }

  if (passwordVal.length < 6) {
    passwordErrorWrapper.innerText = "Password should be at least 6 characters";
    isValid = false;
  }

  if (passwordVal !== confirmPasswordVal) {
    confirmPasswordErrorWrapper.innerText = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    createSubmitElement(formData);
    resetForm();
  }
}

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function createSubmitElement(formData) {
  const submitElement = document.createElement("div");
  submitElement.classList.add("submit-element");

  const usernameElement = document.createElement("p");
  usernameElement.textContent = "Username: " + formData.username;
  submitElement.appendChild(usernameElement);

  const emailElement = document.createElement("p");
  emailElement.textContent = "Email: " + formData.email;
  submitElement.appendChild(emailElement);

  const passwordElement = document.createElement("p");
  passwordElement.textContent = "Password: " + formData.password;
  submitElement.appendChild(passwordElement);

  submitUI.appendChild(submitElement);
}

function resetForm() {
  form.reset();
}