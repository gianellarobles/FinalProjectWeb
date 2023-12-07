// express.js

const path = require('path');
const express = require('express');
const userController = require('./controllers/users');
const activityController = require('./controllers/activity');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

console.log('1: Trying to start server...');

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`);
});

//mobile menu
//This is where we add the app version and displayed the tabs active 
    //Need to be changed up a little because it has to be functional, not just opened already 

console.log('3: End of file, waiting for requests...');

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});
