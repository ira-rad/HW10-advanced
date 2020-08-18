function getAudio(source){
  let audio = new Audio();
	audio.src = source;
	audio.play();
}

document.getElementById("buttonQ").addEventListener('click', () => {
  getAudio('audio/11.mp3')
});
document.getElementById("buttonW").addEventListener('click', () => {
  getAudio('audio/22.mp3')
});
document.getElementById("buttonE").addEventListener('click', () => {
  getAudio('audio/33.mp3')
});
document.getElementById("buttonR").addEventListener('click', () => {
  getAudio('audio/44.mp3')
});
document.getElementById("buttonT").addEventListener('click', () => {
  getAudio('audio/55.mp3')
});
document.getElementById("buttonY").addEventListener('click', () => {
  getAudio('audio/66.mp3')
});

document.addEventListener("keydown", function (e) {
  return e.keyCode == 81 
    ? getAudio('audio/11.mp3')
    : e.keyCode == 87
    ? getAudio('audio/22.mp3')
    : e.keyCode == 69
    ? getAudio('audio/33.mp3')
    : e.keyCode == 82
    ? getAudio('audio/44.mp3')
    : e.keyCode == 84
    ? getAudio('audio/55.mp3')
    : e.keyCode == 89
    ? getAudio('audio/66.mp3')
    : document.getElementById('')
});
 
