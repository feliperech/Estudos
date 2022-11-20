//console.log('Hello World');

import { nanoid } from "nanoid";
import copy from "clipboard-copy"
import './style.css'; //adiciona o estilo no JS

let password = null;

const passwordButtonEl = document.querySelector('button');
const displayPassEl = document.querySelector('h2');

passwordButtonEl.addEventListener('click', ()=>{
   password = nanoid();

   displayPassEl.innerHTML = password;
});

displayPassEl.addEventListener('click', () =>{
    copy(displayPassEl.innerHTML);
    window.alert('Password Copied!');
});
