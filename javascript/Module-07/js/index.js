'use strict';
const posts = [
	{
		img: "https://placeimg.com/400/150/arch",
		title: "Post title 1",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
		link: 'link-1.com'
	},
	{
		img: "https://placeimg.com/400/150/nature",
		title: "Post title 2",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
		link: 'link-2.com'
	},
	{
		img: "https://placeimg.com/400/150/arch",
		title: "Post title 3",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
		link: 'link-3.com'
	}
];
const createPost = () => {
	const post = document.createElement('ul');
	post.classList.add('post');
	return post;
};

const createPostImg = img => {
	const postImg = document.createElement('img');
	postImg.setAttribute('src', img);
	postImg.setAttribute('alt', "post image");
	return postImg;
};

const createPostTitle = title => {
	const postTitle = document.createElement('h2');
	postTitle.classList.add('post__title');
	postTitle.textContent = title;
	return postTitle;
};

const createPostParagraph = text => {
	const postText = document.createElement('p');
	postText.classList.add('post__text');
	postText.textContent = text;
	return postText;
};

const createPostButton = link => {
	const postLink = document.createElement('a');
	postLink.classList.add('button');
	postLink.textContent = 'Read More';
	postLink.href = link;
	return postLink;
};

const createPostCard = ({img, title, text, link}) => {
	const post = createPost();
	const postImage = createPostImg(img);
	const postName = createPostTitle(title);
	const postParagraph = createPostParagraph(text);
	const postButton = createPostButton(link);
	post.append(postImage, postName, postParagraph, postButton);
	return post;
};

const createCards = arr => {
	return arr.map(post => createPostCard(post));
};

const paintCards = cards => {
	const list = document.querySelector('.main');
	const cardPosts = createCards(cards);
	list.append(...cardPosts);
};

paintCards(posts);