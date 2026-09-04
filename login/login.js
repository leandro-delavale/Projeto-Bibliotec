// console.log("Hello world!");

// alert("Hello world!!");

// var nome = "Késsia" !Não vamos usar o var

// let none = "Késsia"
// console.log(none)
//cosnt none = "Késsia"

// nome = "Pedro"
// console.log(nome)

const campoSenha = document.getElementById("Senha")
const btnSenha = document.querySelector("#mostrar-senha")


btnSenha.addEventListener("click", function () {

    // e.preventDefault();

    //  if (campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // }
    // else {
    //     campoSenha.type = "password";
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
})