const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

function checkInputs() {
  // get inputs from the inputs
  const usrenameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usrenameValue === "") {
    showError(username, "username cannot be blank");
  } else {
    //   add success class
    showSuccess(username);
  }
  if (emailValue === "") {
    showError(email, "Email cannot be blank");
  } else if (!isEmailValid(emailValue)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (passwordValue === "") {
    showError(password, "password cannot be blank");
  } else {
    showSuccess(password);
  }
}

// showError Message
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".small");

  //   add error message inside small
  small.innerText = message;

  //   add error class
  formControl.className = "form-control error";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email valid function
function isEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
  checkLength(emailValue);
});
