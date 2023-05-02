function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalExit = document.querySelector('.close');
let form = document.querySelector('#form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
modalExit.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal form

function closeModal() {
  modalbg.style.display = 'none';
}

// REGEX

// NOM et Prénom
let regexName = new RegExp('^[a-zA-ZÀ-Ÿà-ÿ-s]{2,}$', 'g');
// Prénom

form.first.addEventListener('change', function () {
  validFirstName(this);
});

const validFirstName = function (inputFirstName) {
  let testFirstName = regexName.test(inputFirstName.value);

  let formData = document.querySelector('.formData');
  if (!testFirstName) {
    formData.setAttribute('data-error-visible', 'true');
    formData.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
  } else {
    formData.removeAttribute('data-error-visible', 'true');
    formData.removeAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
  }
};

// Nom

form.last.addEventListener('change', function () {
  validLastName(this);
});

const validLastName = function (inputLastName) {
  let testLastName = regexName.test(inputLastName.value);

  let formData = document.querySelector('.formData');
  if (!testLastName) {
    formData.nextElementSibling.setAttribute('data-error-visible', 'true');
    formData.nextElementSibling.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
  } else {
    formData.nextElementSibling.removeAttribute('data-error-visible', 'true');
    formData.nextElementSibling.removeAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
  }
};

// E-mail

// REGEX

let regexEmail = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$');

form.email.addEventListener('change', function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let testEmail = regexEmail.test(inputEmail.value);

  let formData = document.querySelector('.formData');
  if (!testEmail) {
    formData.nextElementSibling.setAttribute('data-error-visible', 'true');
    formData.nextElementSibling.setAttribute(
      'data-error',
      'Veuillez entrer un e-mail valide'
    );
  } else {
    formData.nextElementSibling.removeAttribute('data-error-visible', 'true');
    formData.nextElementSibling.removeAttribute(
      'data-error',
      'Veuillez entrer un e-mail valide'
    );
  }
};
