# Plain JavaScript Registration Form

The registration form that enables the user to register using email or mobile phone number.

See it live: https://nikmargit.github.io/test/

The app is written in pure JavaScript. SASS is used for styling, with BEM class naming. Email validation is done with Regex, while the [validator](https://www.npmjs.com/package/validator) package handles the mobile number validation.

The user can also select any of the 100+ currencies from the searchable dropdown list.

The register button simulates the 2 second API call, and it can throw an error or succeed, depending on the `Math.random` function.

## Installation

Download the repo and run

```bash
npm i
npm run dev
```

The app will start on `http://localhost:8080/`
