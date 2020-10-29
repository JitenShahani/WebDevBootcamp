// NOTE: Default color is set to Honedew
// TODO: Update code to change background color evry time the page is refreshed.

function setBackground() {
	window.setTimeout('setbackground()', 5000); // 5000 milliseconds delay
	let index = Math.round(Math.random() * 10);
	let colorValue = '#636e72'; // default color - (index = 0)

	if (index == 1) colorValue = '#55efc4'; // light green
	if (index == 2) colorValue = '#81ecec'; // faded poster
	if (index == 3) colorValue = '#74b9ff'; // green daner tail
	if (index == 4) colorValue = '#a29bfe'; // shy moment
	if (index == 5) colorValue = '#dfe6e9'; // city lights
	if (index == 6) colorValue = '#00cec9'; // Robin's egg blue
	if (index == 7) colorValue = '#b2bec3'; // soothing breeze
	if (index == 8) colorValue = '#fab1a0'; // first date
	if (index == 9) colorValue = '#ffeaa7'; // sour lemon
	if (index == 10) colorValue = '#D6A2E8'; // bright ube

	document.getElementsByTagName('body')[0].style.backgroundColor = colorValue;
}
