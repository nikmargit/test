const isMobilePhone = require('validator/es/lib/isMobilePhone').default;
const tabSwitching = require('./tabSwitching');

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById('form');
const errors = document.querySelector('.form__errors');
const success = document.querySelector('.form__success');
const spinner = document.querySelector('.spinner-wrap');
const list = document.querySelector('.form__list');

function validateEmail(email) {
  return emailRegex.test(String(email).toLowerCase());
}

function handleErrors(valuesObject) {
  const errorsArray = [];
  Object.keys(valuesObject).forEach((key) => {
    if (key === 'email') {
      if (!valuesObject.email) {
        errorsArray.push('Email is required.');
      } else {
        const isEmailValid = validateEmail(valuesObject.email);
        if (!isEmailValid) {
          errorsArray.push('Email is not valid.');
        }
      }
    } else if (key === 'phone') {
      if (!valuesObject.phone) {
        errorsArray.push('Phone is required.');
      } else {
        const mobileNumberValid = isMobilePhone(valuesObject.phone);
        if (!mobileNumberValid) {
          errorsArray.push('Mobile number is not valid.');
        }
      }
    } else if (key === 'currency') {
      if (!valuesObject.currency) {
        errorsArray.push('Currency is required.');
      }
    } else if (key === 'terms') {
      if (!valuesObject.terms) {
        errorsArray.push('Accept terms and conditions to proceed.');
      }
    }
  });
  return errorsArray;
}

function displayErrors(errorsArray) {
  list.innerHTML = '';
  errorsArray.forEach((err) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(err);
    node.appendChild(textnode);
    list.appendChild(node);
  });
  errors.style.display = 'block';
}

function handleRegister(e) {
  e.preventDefault();
  success.style.display = 'none';
  errors.style.display = 'none';
  const inactiveTab = tabSwitching.activeTab === 'email' ? 'phone' : 'email';
  const valuesObject = Object.values(form).reduce((obj, field) => {
    const objCopy = { ...obj };
    if (!field.name || field.name === inactiveTab) {
      return objCopy;
    }
    if (field.type === 'checkbox') {
      objCopy[field.name] = field.checked;
    } else {
      objCopy[field.name] = field.value;
    }
    return objCopy;
  }, {});

  const errorsArray = handleErrors(valuesObject);

  if (errorsArray.length > 0) {
    displayErrors(errorsArray);
  } else {
    errors.style.display = 'none';
    spinner.style.display = 'flex';
    setTimeout(() => {
      try {
        if (Math.random() < 0.5) {
          throw new Error();
        } else {
          success.style.display = 'block';
        }
      } catch (error) {
        displayErrors(['There was an error processing your registration.']);
      }
      spinner.style.display = 'none';
    }, 2000);
  }
}

form.addEventListener('submit', handleRegister);
