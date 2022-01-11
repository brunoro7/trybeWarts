const buttonEntrar = document.getElementById("loginEntrar");
const inputEmail = document.querySelector("#loginEmail");
const inputSenha = document.getElementById("loginSenha");

function enviarLogin(event) {
  event.preventDefault();

  if(inputEmail.value === "tryber@teste.com" && inputSenha.value === "123456"){
    alert("Olá, Tryber!")
  }
  // para o teste o email: tryber@teste.com e a senha: 123456
  else {
    alert("Email ou senha inválidos.");
  }

}
buttonEntrar.addEventListener("click", enviarLogin);