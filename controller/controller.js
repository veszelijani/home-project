'use strict';

const path = require('path');
const conn = require('../db');
const jsonParser = require('../server');

const websiteController = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('login.html', { root: path.join("public", '../static') });

    })
    app.get('/register', (req, res) => {
        res.sendFile('register.html', { root: path.join("public", '../static') });

    })
    app.post('/register', jsonParser, async function (req, res) {
        let email = req.body.email;
        let userName = req.body.username;
        let password = req.body.password;

        res.status(200);
        res.set('Content-Type', 'application/json');

        let validUser = await userNameCheck(userName);
        let validEmail = await emailCheck(email);
        
        if (validUser === undefined) {
            if (validEmail === undefined) {
                if (password[0] === password[1]) {
                    conn.query(`INSERT INTO users(email, userName, password)
        VALUES ('${email}', '${userName}', '${password[0]}' );`, (err, rows) => {
                        if (err) throw err;
                    });
                    res.redirect('/');
                } else {
                    res.status(400).send('The passwords not matches!');
                }
            } else {
                res.status(401).send('The email is already in use');
            }
        } else {
            res.status(402).send('The user already in use');
        }
        res.status(200);
    })
}

let userNameCheck = function (userName) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM users WHERE userName = '${userName}';`, (err, rows) => {
            resolve(rows[0]);
        })
    })
}

let emailCheck = function (email) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM users WHERE email = '${email}';`, (err, rows) => {
            resolve(rows[0]);
        })
    })
}

module.exports = {
    websiteController,
};