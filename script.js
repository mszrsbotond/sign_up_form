const inputPass = document.querySelector(".show-password #show-password")
const labelPass = document.querySelector(".show-password label")
const password = document.querySelector("#password")

inputPass.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        labelPass.style.color = "var(--underline-blue)"
    }
    else {
        password.type = "password"
        labelPass.style.color = "var(--gray)"
    }
})

const submit = document.querySelector(".submit")

const formBuiltIn = document.querySelector("form")

const formElements = document.querySelectorAll(".form")
formElements.forEach(formElement => {
    formElement.addEventListener("input", () => {
        if (formBuiltIn.checkValidity()) {
            submit.style["background-color"] = "var(--underline-blue)"
            submit.style["color"] = "#2e2e2e"
            submit.classList.add("submit-hover")
            submit.classList.add("submit-active")
        }
        else {
            submit.style["background-color"] = "rgba(201, 201, 201, 0.1)"
            submit.style["color"] = "gray"
            submit.classList.remove("submit-hover")
            submit.classList.remove("submit-active")
        }
    })
})
