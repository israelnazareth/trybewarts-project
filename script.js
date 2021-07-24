const buttonLogin = document.getElementById('buttonLogin');
const login = document.getElementById('login');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const checkboxAgree = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const chosenHouse = document.getElementById('house');
const family = document.querySelectorAll('.family');
const contents = document.querySelectorAll('.subject');
const nota = document.querySelectorAll('.rate');

function loginAlert(event) {
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
    event.preventDefault();
  } else {
    alert('Olá, Tryber!');
  }
} buttonLogin.addEventListener('click', loginAlert);

function submitEnable() {
  if (checkboxAgree.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
} checkboxAgree.addEventListener('click', submitEnable);

function counterCaracter() {
  counter.innerText = textArea.maxLength - textArea.value.length;
} textArea.addEventListener('keyup', counterCaracter);

/**
 * Consultei o repositório do [Arturo Vaine e Mateus Gambaro] para resolver essa parte.
 * Link: https://github.com/tryber/sd-014-b-project-trybewarts/pull/93/commits/b6c4260b301962630f1816c3b21c919ebfae1b9f
 */
const check = (event) => {
  for (let index = 0; index <= event.length; index += 1) {
    if (event[index].checked) {
      return event[index].value;
    }
  }
};

const checkContent = () => {
  let materias = '';
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked) {
      materias += `${contents[index].value}, `;
    }
  } return materias;
};

function submitForm() {
  form.innerHTML = '';
  form.innerHTML += `<p>Nome: ${inputName.value} ${inputLastName.value}</p>`;
  form.innerHTML += `<p>Email: ${inputEmail.value}</p>`;
  form.innerHTML += `<p>Casa: ${chosenHouse.value}</p>`;
  form.innerHTML += `<p>Família: ${check(family)}</p>`;
  form.innerHTML += `<p>Matérias: ${checkContent()}</p>`;
  form.innerHTML += `<p>Avaliação: ${check(nota)}</p>`;
  form.innerHTML += `<p>Observações: ${textArea.value}</p>`;
}

submitButton.addEventListener('click', submitForm);
