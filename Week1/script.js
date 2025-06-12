    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameErr.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (number === "" ) {
        passErr.textContent = "Please enter a phone number with your country's dialing code at the start";
        isValid = false;
    }
    else {
        return;
    }


