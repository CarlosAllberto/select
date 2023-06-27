const form = document.querySelector("#login-form")

const login = async () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    await fetch("http://localhost:3333/user/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.status === 403) return alert("Dados incorretos.")
        if (response.status === 500) return alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde.")
        return response.json()
    })
    .then(data => {
        if (data) {
            localStorage.clear()
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.response))
            location.href = "../index.html"
        }
    })
    .catch(() => alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde."))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    login()
})