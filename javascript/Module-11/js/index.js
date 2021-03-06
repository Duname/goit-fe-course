'use strict';
const form = document.querySelector('.js-form');
const createFilter = document.querySelector('.filter');
const reset = document.querySelector('.reset');

createFilter.addEventListener('click', handleFilter);
reset.addEventListener('click', formReset);

let newFill = [];
const laptops = [
	{
		size: 13,
		color: 'white',
		price: 28000,
		release_date: 2015,
		name: 'Macbook Air White 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'gray',
		price: 32000,
		release_date: 2017,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'white',
		price: 32000,
		release_date: 2016,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'black',
		price: 32000,
		release_date: 2015,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'gray',
		price: 32000,
		release_date: 2016,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},

	{
		size: 13,
		color: 'gray',
		price: 32000,
		release_date: 2015,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'black',
		price: 32000,
		release_date: 2016,
		name: 'Macbook Air Gray 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'black',
		price: 35000,
		release_date: 2017,
		name: 'Macbook Air Black 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 13,
		color: 'white',
		price: 35000,
		release_date: 2017,
		name: 'Macbook Air Black 13"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'white',
		price: 45000,
		release_date: 2015,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'white',
		price: 45000,
		release_date: 2016,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'white',
		price: 45000,
		release_date: 2017,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'gray',
		price: 45000,
		release_date: 2015,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},

	{
		size: 15,
		color: 'gray',
		price: 55000,
		release_date: 2016,
		name: 'Macbook Pro Gray 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'gray',
		price: 45000,
		release_date: 2017,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'black',
		price: 45000,
		release_date: 2016,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 15,
		color: 'black',
		price: 45000,
		release_date: 2015,
		name: 'Macbook Air White 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},

	{
		size: 15,
		color: 'black',
		price: 45000,
		release_date: 2017,
		name: 'Macbook Pro Black 15"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'white',
		price: 65000,
		release_date: 2015,
		name: 'Macbook Air White 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'white',
		price: 65000,
		release_date: 2016,
		name: 'Macbook Air White 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'white',
		price: 65000,
		release_date: 2017,
		name: 'Macbook Air White 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'gray',
		price: 75000,
		release_date: 2015,
		name: 'Macbook Pro Gray 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'gray',
		price: 75000,
		release_date: 2016,
		name: 'Macbook Pro Gray 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'gray',
		price: 75000,
		release_date: 2017,
		name: 'Macbook Pro Gray 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'black',
		price: 75000,
		release_date: 2015,
		name: 'Macbook Pro Gray 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'black',
		price: 75000,
		release_date: 2016,
		name: 'Macbook Pro Gray 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
		size: 17,
		color: 'black',
		price: 80000,
		release_date: 2017,
		name: 'Macbook Pro Black 17"',
		img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
];

function handleFilter(event) {
	event.preventDefault();
	filterReset();

	const inputs = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
	const filtered = inputs.reduce((acc, input) => {
			acc[input.name].push(input.value)
			return acc;
		},
		{size: [], color: [], release_date: []},
	);

	console.log(filtered);
	const filterTypes = Object.keys(filtered);
	const toAdd = laptops.filter(laptop => {
		return filterTypes.every(el => {
			return filtered[el].includes(String(laptop[el]))
		})
	});
	console.log(toAdd);
	newFill = toAdd;

	const card = document.getElementById('laptop').innerHTML.trim();
	const template = Handlebars.compile(card);
	const markup = template(newFill);
	let notebook = document.getElementById('notebook');
	notebook.insertAdjacentHTML('afterbegin', markup);
}

function formReset(event) {
	filterReset();
	form.reset();
	newFill = [];
}

function filterReset() {
	newFill = [];
	notebook.innerHTML = '';
}