const mainInput = document.getElementById('validation-input');

mainInput.addEventListener('blur', () => {
  if (mainInput.value.length === Number(mainInput.attributes["data-length"].value)) {
    mainInput.classList.add('valid');
    mainInput.classList.remove('invalid');
  } else {
    mainInput.classList.add('invalid');
    mainInput.classList.remove('valid');
  }
});
