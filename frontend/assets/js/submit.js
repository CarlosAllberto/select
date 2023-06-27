const form = document.querySelector("#submit-form")

const submit = async () => {
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let passwordConfirm = document.querySelector("#password-confirm").value
    let data = document.querySelector("#data").value
    let genero = document.getElementsByName("genero")

    genero.forEach(e => {
        if (e.checked) genero = e.value[0].toUpperCase()
    })

    if ( password !== passwordConfirm ) return alert("Os campos de senhas estão diferentes!")

    await fetch("http://localhost:3333/user/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ nome, email, password, data, genero })
    })
    .then(response => {
        if (response.status === 403) return alert("Email já está em uso.")
        if (response.status === 500) return alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde.")
        alert("Usuário cadastrado.")
        location.href = "../login/"
    })
    .catch(() => alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde."))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    submit()
})