let value = 0;

const decremBtn = document.querySelector('button[data-action="decrement"]')
const incremBtn = document.querySelector('button[data-action="increment"]')
const valueSpan = document.getElementById('value')

decremBtn.addEventListener("click", decrement)
incremBtn.addEventListener("click", increment)

function decrement() {
  value -= 1;
  valueSpan.textContent = value;
}

function increment() {
  value += 1;
  valueSpan.textContent = value;

}
