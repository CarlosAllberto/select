const form = document.querySelector("#edit-form")

const userEdit = async () => {
    let token = localStorage.getItem("token")
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let data = document.querySelector("#data").value
    let genero = document.getElementsByName("genero")
    let id = JSON.parse(localStorage.getItem("user")).id

    genero.forEach(e => {
        if (e.checked) genero = e.value[0].toUpperCase()
    })

    await fetch(`http://localhost:3333/user/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ nome, email, password, data, genero })
    })
    .then(response => {
        if (response.status === 403) return alert("Nada para alterar.")
        if (response.status === 500) return alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde.")
        return response.json()
    })
    .then(data => {
        if (data) {
            alert("Dados alterados.")
            localStorage.clear()
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.response))
        }
    })
    .catch(() => alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde."))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    userEdit()
})