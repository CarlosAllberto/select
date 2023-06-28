const buttonDelete = document.querySelector("#delete-account")

const deleteAccount = async () => {
    let token = localStorage.getItem("token")
    let password = document.querySelector("#password-delete").value
    let id = JSON.parse(localStorage.getItem("user")).id

    await fetch(`http://localhost:3333/user/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ password })
    })
    .then(response => {
        if (response.status === 500) return alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde.")
        alert("Conta excluida.")
        localStorage.clear()
        location.href = "../index.html"
    })
    .catch(() => alert("Erro desconhecido, verifique se os dados estão certo ou tente mais tarde."))
}

buttonDelete.addEventListener("click", () => deleteAccount())