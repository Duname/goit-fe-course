'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let userInput = prompt('Please Enter Your Login');
let result = addLogin(logins, userInput);
alert(result);

function addLogin(logins, login) {
	if (checkLogin(login)) {
		if (!checkExistLogins(logins, login)) {
			logins.push(login);
			return `Login ${login} successfully!`;
		} else {
			return `Login ${login} is already used!`;
		}
	} else {
		return `Error Login ${login}! Account name must be more than 4 and less than 16 symbols`;
	}
}

function checkLogin(login) {
	return login !== null && login.length > 4 && login.length <= 16;
}

function checkExistLogins(logins, login) {
	return logins.includes(login);
}
