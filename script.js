const inputs = document.querySelectorAll("input, select, textarea");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const passwordCheckSpan = document.getElementById("password-check");

passwordField.addEventListener("change", checkPassword);
confirmPasswordField.addEventListener("change", checkPassword);

inputs.forEach(input => {
    input.addEventListener(
        "invalid",
        (event) => {
            input.classList.add("error");
        },
        false
    );
});

function checkPassword() {
    if (passwordField.value !== "" && confirmPasswordField.value !== "") {
        if (passwordField.value !== confirmPasswordField.value) {
            passwordCheckSpan.innerHTML = "Passwords do not match!";
            passwordField.setCustomValidity("Passwords do not match!");
            confirmPasswordField.setCustomValidity("Passwords do not match!");
        } else {
            passwordCheckSpan.innerHTML = "";
            passwordField.setCustomValidity("");
            confirmPasswordField.setCustomValidity("");
        }
    } else {
        passwordCheckSpan.innerHTML = "";
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
    }
}