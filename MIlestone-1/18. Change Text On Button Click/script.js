const mainText = document.getElementById("main-Text");
const button = document.getElementById("btnChangeText");
button.addEventListener("click", (e) => {
    if (mainText.innerHTML === "The most affordable learning platform") {
        mainText.innerText = "PW Skills"
    }
    else {
        mainText.innerText = "The most affordable learning platform"
    }
})