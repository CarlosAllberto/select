const verifyLogin = async () => {
    let token = localStorage.getItem("token")

    await fetch("http://localhost:3333/user/token", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    })
    .then(response => {
        if (response.status === 401) {
            localStorage.clear()
            alert("Você não esta logado.")
            return location.href = "http://localhost:5500/login/"
        }
        if (response.status === 500) {
            localStorage.clear()
            alert("Token invalido.")
            return location.href = "http://localhost:5500/login/"
        } 
    })
    .catch(() => {
        localStorage.clear()
        alert("Erro desconhecido, tente mais tarde.")
        return location.href = "http://localhost:5500/login/"
    })
}

window.addEventListener("load", () => verifyLogin())