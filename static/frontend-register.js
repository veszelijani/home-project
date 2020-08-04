'use strict';

const url = 'http://localhost:8080';
let response;

function handleRegister() {
    document.forms['register'].addEventListener('submit', (e) => handleSubmit(e));

    async function handleSubmit(e) {

        e.preventDefault();

        const submittedUser = document.querySelector('input[type="text"]').value;
        const submittedEmail = document.querySelector('input[type="email"]').value;
        const submittedPassword = document.querySelector('input[type="password"]').value;

        const data = {
            "userName": submittedUser,
            "email": submittedEmail,
            "password": submittedPassword,
        }
        try {
            response = await fetch(`${url}/register`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        }
      }
}
document.onload = handleRegister();