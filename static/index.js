'use strict';

function handleLogin() {
    document.forms['login'].addEventListener('submit', (e) => handleSubmit(e));

  
    const icon = document.getElementById('togglePassword');
    icon.addEventListener('click', () => {
      togglePassword(icon);
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${document.getElementById('username').value}!`);
  }
  
  function togglePassword(icon) {
    const password = document.getElementById('password');
    icon.classList.toggle('showPassword');
    icon.classList.toggle('hidePassword');
    const isShown = icon.classList.contains('hidePassword');
    password.type = isShown ? 'text' : 'password';
  }
  
  document.onload = handleLogin();