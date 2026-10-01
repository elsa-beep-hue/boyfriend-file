function checkPassword() {

    const password =
        document.getElementById("password").value;

    const correctPassword = "Sunflower";

    if (password === correctPassword) {

        document
            .getElementById("loginScreen")
            .classList.add("hidden");

        document
            .getElementById("mainFile")
            .classList.remove("hidden");

    } else {

        document
            .getElementById("error")
            .innerText =
            "ACCESS DENIED. Try again 😭";

    }
}


function showMessage() {

    document
        .getElementById("secretMessage")
        .classList.remove("hidden");

}


function finalSurprise() {

    document
        .getElementById("final")
        .classList.remove("hidden");

}