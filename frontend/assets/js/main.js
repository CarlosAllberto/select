const showPasswordButton = document.querySelector("#show-password")
const showPasswordConfirmButton = document.querySelector("#show-password-confirm")

const showPassword = () => {
    let showPassordIcon = document.querySelector("#show-password-icon")
    let inputPassword = document.querySelector("#password")

    if (inputPassword.type === "password") {
        inputPassword.type = "text"
        showPassordIcon.classList.replace("bi-eye", "bi-eye-slash")
    } else {
        inputPassword.type = "password"
        showPassordIcon.classList.replace("bi-eye-slash", "bi-eye")
    }
}

const showPasswordConfirm = () => {
    let showPassordConfirmIcon = document.querySelector("#show-password-confirm-icon")
    let inputPasswordConfirm = document.querySelector("#password-confirm")

    if (inputPasswordConfirm.type === "password") {
        inputPasswordConfirm.type = "text"
        showPassordConfirmIcon.classList.replace("bi-eye", "bi-eye-slash")
    } else {
        inputPasswordConfirm.type = "password"
        showPassordConfirmIcon.classList.replace("bi-eye-slash", "bi-eye")
    }
}

showPasswordButton.addEventListener("click", () => showPassword())
showPasswordConfirmButton.addEventListener("click", () => showPasswordConfirm())
