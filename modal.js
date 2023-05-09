function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
  modalbg.style.display = 'none';
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalExit = document.querySelectorAll('.close-btn');
const form = document.querySelector('#form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
modalExit.forEach((btn) => btn.addEventListener('click', closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal form

function closeModal() {
  let confirm = document.querySelector('.confirmation');
  let bouton = document.querySelector('.boutonFermer');
  try {
    document.querySelector('.modal-body').removeChild(confirm);
    document.querySelector('.modal-body').removeChild(bouton);
  } catch {}
  modalbg.style.display = 'none';
}

// REGEX Text

let regexText = new RegExp('^[a-zA-ZÀ-Ÿà-ÿ-s]{2,}$');

// Fonction

const validInputText = function (inputText) {
  let isTextValid = regexText.test(inputText.value);
  inputText
    .closest('.formData')
    .setAttribute('data-error-visible', !isTextValid);
  return isTextValid;
};
// Prénom

form.first.addEventListener('keyup', function () {
  validInputText(this);
});
form.first.addEventListener('change', function () {
  validInputText(this);
});

// Nom

form.last.addEventListener('keyup', function () {
  validInputText(this);
});

form.last.addEventListener('change', function () {
  validInputText(this);
});

// REGEX Email

let regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');

// Fonction

const validEmail = function (inputEmail) {
  let isEmailValid = regexEmail.test(inputEmail.value);
  inputEmail
    .closest('.formData')
    .setAttribute('data-error-visible', !isEmailValid);
  return isEmailValid;
};

// E-mail

form.email.addEventListener('keyup', function () {
  validEmail(this);
});
form.email.addEventListener('change', function () {
  validEmail(this);
});

// REGEX Number

let regexNumber = new RegExp('^[0-9-/]+$');

// Fonction

const validNumber = function (inputNumber) {
  let isNumberValid = regexNumber.test(inputNumber.value);
  inputNumber
    .closest('.formData')
    .setAttribute('data-error-visible', !isNumberValid);
  return isNumberValid;
};

// Date de Naissance

form.birthdate.addEventListener('keyup', function () {
  validNumber(this);
});
form.birthdate.addEventListener('change', function () {
  validNumber(this);
});

// Tournois

form.quantity.addEventListener('keyup', function () {
  validNumber(this);
});
form.quantity.addEventListener('change', function () {
  validNumber(this);
});

// Localisation

const radioChecked = function (inputRadio) {
  let isRadioChecked = inputRadio.checked;

  inputRadio
    .closest('.formData')
    .setAttribute('data-error-visible', !isRadioChecked);
  return isRadioChecked;
};

// Conditions

const conditionsChecked = function (inputConditions) {
  let isConditionsChecked = inputConditions.checked;
  inputConditions
    .closest('.formData')
    .setAttribute('data-error-visible', !isConditionsChecked);
  return isConditionsChecked;
};

form.conditions.addEventListener('change', function () {
  conditionsChecked(this.name);
});

// VALIDATION

function validate() {
  // Première itération

  // let result = Boolean(
  //   validInputText(form.first) &&
  //     validInputText(form.last) &&
  //     validEmail(form.email) &&
  //     validNumber(form.birthdate) &&
  //     validNumber(form.quantity) &&
  //     (radioChecked(form.location1) ||
  //       radioChecked(form.location2) ||
  //       radioChecked(form.location3) ||
  //       radioChecked(form.location4) ||
  //       radioChecked(form.location5) ||
  //       radioChecked(form.location6)) &&
  //     conditionsChecked(form.checkbox1)
  // );

  // Deuxième itération

  let result = [
    validInputText(form.first),
    validInputText(form.last),
    validEmail(form.email),
    validNumber(form.birthdate),
    validNumber(form.quantity),
    radioChecked(form.location1) ||
      radioChecked(form.location2) ||
      radioChecked(form.location3) ||
      radioChecked(form.location4) ||
      radioChecked(form.location5) ||
      radioChecked(form.location6),
    conditionsChecked(form.checkbox1),
  ].every(Boolean);

  if (result) {
    success();
  }

  return false;
}

function success() {
  let modalBdy = document.querySelector('.modal-body');
  let newContent = document.createElement('div');
  let newButton = document.createElement('button');

  modalBdy.appendChild(newContent);
  modalBdy.appendChild(newButton);

  newContent.classList.add('confirmation');
  newContent.textContent = 'Merci pour votre inscription';
  newButton.classList.add('boutonFermer');

  newButton.textContent = 'Fermer';

  let modalClose = document.querySelector('.boutonFermer');

  modalClose.addEventListener('click', closeModal);

  form.reset();
}
