// populate the currency dropdown with currencies
const currencies = require('./currencyList');

const currency = document.getElementById('currency');

const currencyArr = Object.keys(currencies).map(
  (key) => `<option value="${currencies[key].name}"> </option>`,
);

currency.innerHTML = currencyArr;
