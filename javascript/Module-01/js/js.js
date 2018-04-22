'use strict';
let people = +prompt('Пожалуйста, введи количество необходимых мест');

let Taba = 6,
		Hurgada = 25,
		Sharm = 15;

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
else if (people > 25) {
	alert('К сожалению на данное количество гостей, свободных мест нет!');
}