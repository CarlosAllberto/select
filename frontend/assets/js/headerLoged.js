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
        if (response.status === 200) {
            let navLoged = document.querySelector("#nav-loged")
            let navNotLoged = document.querySelector("#nav-not-loged")

            navLoged.style.display = "block"
            navNotLoged.style.display = "none"
        }
    })
}

window.addEventListener("load", () => verifyLogin())