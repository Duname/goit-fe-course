'use strict';

// First task

const numbers = [];
do {
	const userInput = prompt('Enter the numbers');
	const userInputNum = Number(userInput);
	if (userInput === null) {
		break;
	} else if (Number.isNaN(userInputNum)) {
		alert('Error! Enter only numbers! Please try again!');
	} else {
		numbers.push(userInputNum);
	}
} while (true);
let total = 0;
for (const key of numbers) {
	total += key;
}
alert(`Total amount: ${total}`);
console.log(numbers);
console.log(total);


// Second task

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
do {
	const userPassword = prompt('Enter your password');
	attempts -= 1;
	if (userPassword === null) {
		break;
	} else if (attempts === 0) {
		alert('End of Attempts! Account is blocked for 24 hours!');
		break;
	} else if (passwords.includes(userPassword)) {
		alert('Welcome!!!');
		break;
	} else {
		alert(`Incorrect password, you have ${attempts} attempts, please try again!`);
	}
} while (true);