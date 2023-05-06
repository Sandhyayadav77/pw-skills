const email = document.getElementById("email");
const password = document.getElementById("password");
let message = document.getElementById("message");
const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", (event) => {
    // event.preventDefault();
    const emailValue = email.value;
    console.log(emailValue);
    const passwordValue = password.value;
    console.log(passwordValue);
    if (passwordValue.length < 8 || !(emailValue.includes("@"))) {
        message.textContent = "Invalid Email or Password";
        message.style.color = "red";
        return;
    }
    message.textContent = " Valid Email and Password";
    message.style.color = "lightgreen";

});



