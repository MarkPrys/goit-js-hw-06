const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault()

  const { email, password } = event.currentTarget.elements;

  if (password.value.length < 1) {
    alert("password field is empty");
    return;
  }

  if (email.value.length < 1) {
    alert("email field is empty");
    return;
  }

  const info = {
    email: email.value,
    password: password.value
  }

  console.log(info);

  loginForm.reset();

}
