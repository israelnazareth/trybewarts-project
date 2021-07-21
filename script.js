const buttonLogin = document.getElementById('buttonLogin');
const login = document.getElementById('login');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const checkboxAgree = document.getElementById('agreement');

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
