"use strict";

let ckw = document.querySelector("#window");

//Loading Window

window.addEventListener("load",function(){
    ckw.style.left = '40px';
});

//Click on the button

let button = document.querySelector("#close");

button.addEventListener("click",function(){
    ckw.style.left = '-100%';
});