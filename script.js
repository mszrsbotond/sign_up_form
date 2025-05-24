let showPass = document.getElementById("show-password")
let password = document.getElementById("password")

showPass.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
})

