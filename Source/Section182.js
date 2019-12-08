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

let header = document.getElementsByTagName('h1');
document.addEventListener('click', function() {
	alert('H1 tag was clicked...');
});