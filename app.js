// JavaScript30 Challenge #01

// keyboard
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return; 

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// click
function playSoundClick(e) {
    let clicked = e.target.parentElement;

    if(!clicked) return; 

    let keyId = clicked.getAttribute('data-key');
    const clickedAudio = document.querySelector(`audio[data-key="${keyId}"]`);
    clickedAudio.currentTime = 0;
    clickedAudio.play();
    clicked.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
 }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', playSoundClick));






