   function validateForm()  {
  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

    if (name === "") {
    document.getElementById("nameError").textContent = ("Enter your name");
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Enter a valid message";
    isValid = false;
  }

  return isValid;
}