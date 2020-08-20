function getAudio(source) {
  let audio = new Audio();
  audio.src = source;
  audio.play();
}

const myButton = document.querySelectorAll("button");
myButton.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    getAudio(`audio/1${index + 1}.mp3`);
  });
});

document.addEventListener("keydown", function (e) {
  return e.keyCode == 81
    ? getAudio("audio/11.mp3")
    : e.keyCode == 87
    ? getAudio("audio/12.mp3")
    : e.keyCode == 69
    ? getAudio("audio/13.mp3")
    : e.keyCode == 82
    ? getAudio("audio/14.mp3")
    : e.keyCode == 84
    ? getAudio("audio/15.mp3")
    : e.keyCode == 89
    ? getAudio("audio/16.mp3")
    : document.getElementById("");
});
