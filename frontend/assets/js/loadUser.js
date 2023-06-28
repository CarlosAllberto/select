const loadUser = () => {
    let nome = document.querySelector("#nome")
    let email = document.querySelector("#email")
    let genero = document.getElementsByName("genero")
    let data = document.querySelector("#data")
    
    let dados = JSON.parse(localStorage.getItem("user"))
    nome.value = dados.nome
    email.value = dados.email
    data.value = dados.data.split("T")[0]

    genero.forEach(e => {
        if (e.value[0].toUpperCase() === dados.genero) e.checked = true
    })
}

window.addEventListener("load", () => loadUser())
