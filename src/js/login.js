const formLogin = document.getElementById("form-login")

formLogin.addEventListener("submit", function (event) {

    const inputUsername = formLogin.username.value
    const inputPassword = formLogin.password.value
    login(inputUsername, inputPassword)

    event.preventDefault()
})


async function login(inputUsername, inputPassword) {
    let response = await fetch(`http://localhost:3000/users?username=${inputUsername}`)
    let data = await response.json()

    if (data.length === 0) {
        alert("credenciales incorrectas, revisa el correo o la contraseña")
    } else {
        const userFound = data[0]

        if (userFound.password === inputPassword) {

            localStorage.setItem("currentUser", JSON.stringify(userFound))
            window.location.href = "dashboard.html"


        } else {
            alert("credenciales incorrectas, revisa el correo o la contraseña")
        }
    }
}


