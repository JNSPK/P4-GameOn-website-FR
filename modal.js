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

// REGEX

// Text

let regexText = new RegExp('^[a-zA-ZÀ-Ÿà-ÿ-s]{2,}$');

// Email

let regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');

// Number

let regexNumber = new RegExp('^[0-9-/]+$');

// Date

let regexDate = new RegExp('^[0-9-/]+$');

// Fonction
// Prénom
// Nom

const validText = function (formData) {
  let isTextValid = regexText.test(
    formData.querySelector('input[type=text]').value
  );

  formData.setAttribute('data-error-visible', !isTextValid);
  return isTextValid;
};

// Fonction
// E-mail

const validEmail = function (formData) {
  let isEmailValid = regexEmail.test(
    formData.querySelector('input[type=email]').value
  );
  formData.setAttribute('data-error-visible', !isEmailValid);
  return isEmailValid;
};

// Fonction
// Date de Naissance
const validDate = function (formData) {
  let isDateValid = regexDate.test(
    formData.querySelector('input[type=date]').value
  );
  formData.setAttribute('data-error-visible', !isDateValid);
  return isDateValid;
};

// Fonction
// Tournois

const validNumber = function (formData) {
  let isNumberValid = regexNumber.test(
    formData.querySelector('input[type=number]').value
  );
  formData.setAttribute('data-error-visible', !isNumberValid);
  return isNumberValid;
};

form.addEventListener('keyup', function (e) {
  let formData = e.target.closest('.formData');
  validateField(formData);
});
form.addEventListener('change', function (e) {
  let formData = e.target.closest('.formData');
  validateField(formData);
});

// Localisation

const radioChecked = function (formData) {
  let isRadioChecked =
    null !== formData.querySelector('input[type=radio]:checked');

  formData.setAttribute('data-error-visible', !isRadioChecked);
  return isRadioChecked;
};

// Conditions

const conditionsChecked = function (formData) {
  let isConditionsChecked =
    null !== formData.querySelector('input[type=checkbox]:checked');
  formData.setAttribute('data-error-visible', !isConditionsChecked);

  return isConditionsChecked;
};

// VALIDATION

// Switch

function validateField(element) {
  let validatorType = element.dataset.validator;

  switch (validatorType) {
    case 'text':
      validText(element);
      break;
    case 'email':
      validEmail(element);
      break;
    case 'date':
      validDate(element);
      break;
    case 'number':
      validNumber(element);
      break;
    case 'radio':
      radioChecked(element);
      break;
    case 'checkbox':
      conditionsChecked(element);
      break;
  }
}

function validate() {
  formData.forEach((element) => {
    validateField(element);
  });

  if (!document.querySelector('.formData:is([data-error-visible=true])')) {
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
