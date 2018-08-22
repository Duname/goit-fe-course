'use strict';
document.addEventListener('DOMContentLoaded', initGallery);

const galleryItems = [
	{
		img: 'img/pic-1.jpg',
		preview: 'img/preview-1.jpeg',
		fullview: 'img/fullview-1.jpeg',
		alt: 'alt text 1',
	},
	{
		img: 'img/pic-5.jpg',
		preview: 'img/preview-2.jpeg',
		fullview: 'img/fullview-2.jpeg',
		alt: 'alt text 2',
	},
	{
		img: 'img/pic-4.jpg',
		preview: 'img/preview-3.jpeg',
		fullview: 'img/fullview-3.jpeg',
		alt: 'alt text 3',
	},
	{
		img: 'img/pic-3.jpg',
		preview: 'img/preview-4.jpeg',
		fullview: 'img/fullview-4.jpeg',
		alt: 'alt text 4',
	},
	{
		img: 'img/pic-2.jpg',
		preview: 'img/preview-5.jpeg',
		fullview: 'img/fullview-5.jpeg',
		alt: 'alt text 5',
	},
	{
		img: 'img/pic-6.jpg',
		preview: 'img/preview-6.jpeg',
		fullview: 'img/fullview-6.jpeg',
		alt: 'alt text 6',
	},
];

const imgGallery = document.querySelector('.js-image-gallery');

function initGallery() {
	const fullView = initFullView(galleryItems);
	const preview = initPreview(galleryItems);
	imgGallery.append(fullView, preview);
	document.querySelector('.preview img').classList.add('active');
	preview.addEventListener('click', handleImg.bind(null, galleryItems));
}

function handleImg(galleryItems, e) {
	console.log('e ', e);
	const target = e.target;
	console.log('target ', target);
	const nodeName = target.nodeName;
	if (nodeName !== 'IMG') {
		return;
	}

	const fullview = imgGallery.querySelector('.fullview');
	const currentImg = fullview.querySelector('img');
	const attr = target.getAttribute('src');
	currentImg.setAttribute('src', attr);
	document
		.querySelectorAll('.preview img')
		.forEach(item => item.classList.remove('active'));
	target.classList.toggle('active');
}

function initFullView(galleryItems) {
	const fullview = document.createElement('div');
	fullview.classList.add('fullview');
	const img = document.createElement('img');
	img.setAttribute('src', galleryItems[0].img);
	fullview.append(img);
	return fullview;
}

function initPreview(galleryItems) {
	const preview = document.createElement('ul');
	preview.classList.add('preview');
	let out = [];
	galleryItems.forEach((element) => {
		const prevItem = document.createElement('li');
		const img = document.createElement('img');
		img.setAttribute('src', element.img);
		img.setAttribute('data-fullview', element.img);
		prevItem.appendChild(img);
		out.push(prevItem);
	});

	preview.append(...out);
	return preview;
}