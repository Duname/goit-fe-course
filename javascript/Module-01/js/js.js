'use strict';
let people = +prompt('Пожалуйста, введи количество необходимых мест');

const	Taba = 6;
const Hurgada = 25;
const Sharm = 15;

if (people < 1 || !Number.isInteger(people)) {
	console.log('Ошибка ввода');
}
else if (people < 7 && confirm('Приятного путешествия в группе Taba')) {
	alert('Прекрасный выбор, всего самого лучшего!');
	console.log(`${Taba -= people}`);
}
else if (people < 16 && confirm('Приятного путешествия в группе Sharm')) {
	alert('Прекрасный выбор, всего самого лучшего!');
	console.log(`${Sharm -= people}`);
}
else if (people < 26 && confirm('Приятного путешествия в группе Hurgada')) {
	alert('Прекрасный выбор, всего самого лучшего!');
	console.log(`${Hurgada -= people}`);
}
else {
	alert('К сожалению на данное количество гостей, свободных мест нет!');
}