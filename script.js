const buttonEntrar = document.getElementById('loginEntrar');
const inputEmail = document.querySelector('#loginEmail');
const inputSenha = document.getElementById('loginSenha');

function enviarLogin(event) {
  event.preventDefault();
  // para o teste o email: tryber@teste.com e a senha: 123456
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', enviarLogin);

const buttonEnviar = document.getElementById('submit-btn');
const inputCheck = document.getElementById('agreement');
function buttonChecked() {
  if (inputCheck.checked === true) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled');
  }
}
inputCheck.addEventListener('click', buttonChecked);

function contaTexto() {
  const tamanhoDefault = 500;
  const campoTexto = document.getElementById('textarea');
  const caracteres = document.getElementById('numCaracters');
  const acompanhaTexto = campoTexto.value.length;

  caracteres.innerText = tamanhoDefault;

  const regressiva = (tamanhoDefault - acompanhaTexto);

  caracteres.innerText = regressiva;

  console.log(caracteres);
  console.log(regressiva);
}
contaTexto();
