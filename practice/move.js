'use strict';
const pet = document.getElementById('pet');

document.onmousemove = function(event){
    pet.style.left = event.clientX - (pet.offsetWidth/2) + 'px';
    pet.style.top = event.clientY - (pet.offsetWidth/2) + 'px';
}

