const fontCtrl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

fontCtrl.addEventListener("input", setFontSize);

function setFontSize(event) {
  const fontSize = event.target.value + 'px';
  text.style.fontSize = fontSize;

}