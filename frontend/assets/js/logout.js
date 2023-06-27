const buttonLogout = document.querySelector("#logout")

const logout = () => {
    localStorage.clear()
    location.href = "http://localhost:5500/"
}

buttonLogout.addEventListener("click", () => logout())