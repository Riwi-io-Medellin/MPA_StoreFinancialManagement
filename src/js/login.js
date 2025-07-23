const formLogin = document.getElementById("form-login")

formLogin.addEventListener("submit",function (event) {

    console.log(formLogin.username.value);
    console.log(formLogin.password.value);

    event.preventDefault()
})
