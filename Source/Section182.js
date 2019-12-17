// Section 182 to Section 186

// NOTE: textContent will skip any tags present within the string
// NOTE: innerHTML will display any tags present within string

// NOTE: classList.add will add a class
// NOTE: classList.remove will remove the class
// NOTE: classList.toggle will switch the class on & off

let tag = document.querySelector('p');
tag.classList.add('big');

console.log(tag.textContent);
tag.textContent = 'blah blah blah';

let imgTag = document.getElementsByTagName('img')[0];
console.log(imgTag.getAttribute('src'));	// Displays the current image address
imgTag.setAttribute('src', 'https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg')	// New Image

// Event Handling

let header = document.querySelector('h1');
header.addEventListener('click', function() {
	alert('H1 tag was clicked...');
});

// This is a bad idea as clicking on li will initiate a click on ul
document.querySelector('ul').addEventListener('click', function() {
	console.log('YOU CLICKED THE UL!');
});

let lis = document.querySelectorAll('li');
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', function() {
		this.style.color = 'pink';
	});
}