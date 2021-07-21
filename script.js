const buttonLogin = document.getElementById('buttonLogin');
const login = document.getElementById('login');
const password = document.getElementById('password');

function loginAlert(event) {
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
    event.preventDefault();
  } else {
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', loginAlert);
