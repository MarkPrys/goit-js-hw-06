const nameInput = document.querySelector('#name-input');
const span = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  if (nameInput.value === '') {
    span.textContent = 'Anonymous';
  }
  else {
    span.textContent = nameInput.value; 
  }
});

