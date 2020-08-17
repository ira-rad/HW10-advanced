
document.getElementById("buttonQ").onclick = function () {
  document.getElementById("audioQ").play();
};
document.getElementById("buttonW").onclick = function () {
  document.getElementById("audioW").play();
};
document.getElementById("buttonE").onclick = function () {
  document.getElementById("audioE").play();
};
document.getElementById("buttonR").onclick = function () {
  document.getElementById("audioR").play();
};
document.getElementById("buttonT").onclick = function () {
  document.getElementById("audioT").play();
};
document.getElementById("buttonY").onclick = function () {
  document.getElementById("audioY").play();
};

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 81) {
    document.getElementById("audioQ").play();
  } else if (e.keyCode == 87) {
    document.getElementById("audioW").play();
  } else if (e.keyCode == 69) {
    document.getElementById("audioE").play();
  } else if (e.keyCode == 82) {
    document.getElementById("audioR").play();
  } else if (e.keyCode == 84) {
    document.getElementById("audioT").play();
  } else if (e.keyCode == 89) {
    document.getElementById("audioY").play();
  }
});
