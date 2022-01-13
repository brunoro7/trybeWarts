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
    buttonEnviar.setAttribute('disabled', 'disable');
  }
}
inputCheck.addEventListener('click', buttonChecked);

/** retirei a ideia de base com ref nesse link https://dev.to/walternascimentobarroso/character-counter-with-html-and-js-5cl5 */
function contaTexto() {
  const tamanhoDefault = 500;
  const campoTexto = document.getElementById('textarea');
  const caracteres = document.getElementById('numCaracters');
  const acompanhaTexto = campoTexto.value.length;

  caracteres.innerText = tamanhoDefault;

  const regressiva = (tamanhoDefault - acompanhaTexto);

  caracteres.innerText = regressiva;
}
contaTexto();

/** Requisito 21 - Gerar um formulário na página com os dados preenchidos e selecionados */

/** Source: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value */

const familys = document.getElementsByName('family');
function radioFamilys() {
  let selectedRadio = '';
  for (let index = 0; index < familys.length; index += 1) {
    if (familys[index].checked) {
      selectedRadio = familys[index].value;
    }
  }
  return selectedRadio;
}

const checkboxs = document.querySelectorAll('.subject');
function materiaChecked() {
  let selectedInputCheck = '';
  for (let index = 0; index < checkboxs.length; index += 1) {
    if (checkboxs[index].checked) {
      selectedInputCheck += `${checkboxs[index].value}, `;
    }
  }
  return selectedInputCheck;
}

const rates = document.getElementsByName('rate');
function inputRate() {
  let selectedRate = '';
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked) {
      selectedRate = rates[index].value;
    }
  }
  return selectedRate;
}

const paragrafoNome = document.getElementById('p-nome');
const paragrafoEmail = document.getElementById('p-email');
const paragrafoCasa = document.getElementById('p-house');
const paragrafoFamilia = document.getElementById('p-family');
const paragrafoMateria = document.getElementById('p-materias');
const paragrafoAvaliacao = document.getElementById('p-rate');
const paragrafoObserv = document.getElementById('p-observ');
function buttonSubmitForm(event) {
  event.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = radioFamilys();
  const materias = materiaChecked();
  const rate = inputRate();
  const textArea = document.getElementById('textarea').value;
  paragrafoNome.innerHTML = `Nome: ${name} ${lastName}`;
  paragrafoEmail.innerHTML = `Email: ${email}`;
  paragrafoCasa.innerHTML = `Casa: ${house}`;
  paragrafoFamilia.innerHTML = `Família: ${family}`;
  paragrafoMateria.innerHTML = `Matérias: ${materias}`;
  paragrafoAvaliacao.innerHTML = `Avaliação: ${rate}`;
  paragrafoObserv.innerHTML = `Observações: ${textArea}`;
}
buttonEnviar.addEventListener('click', buttonSubmitForm);
