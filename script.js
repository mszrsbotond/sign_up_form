const inputPass = document.querySelector(".show-password #show-password")
const labelPass = document.querySelector(".show-password label")
const password = document.querySelector("#password")

inputPass.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text";
        labelPass.style.color = "var(--underline-blue)"
    }
    else{
        password.type = "password"
        labelPass.style.color = "var(--gray)"
    }
})

