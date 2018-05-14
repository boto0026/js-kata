"use strict";

setTimeout(function(){
    document.getElementById('window').style.left = '40px';
}, 300);

var close = document.querySelectorAll("#close");

close.forEach(function(div){
    div.addEventListener("click", function(){
        document.getElementById('window').style.left = '-100%';
    })
})