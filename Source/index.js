function setBackground() {
	window.setTimeout("setbackground()", 5000); // 5000 milliseconds delay
	let index = Math.round(Math.random() * 10);
	let colorValue = "#636e72"; // default color - white (index = 0)

	if (index == 1)
		colorValue = "#55efc4"; // light green
	if (index == 2)
		ColorValue = "#81ecec"; // faded poster
	if (index == 3)
		ColorValue = "#74b9ff"; // green daner tail
	if (index == 4)
		ColorValue = "#a29bfe"; // shy moment
	if (index == 5)
		ColorValue = "#dfe6e9"; // city lights
	if (index == 6)
		ColorValue = "#00cec9"; // Robin's egg blue
	if (index == 7)
		ColorValue = "#b2bec3"; // soothing breeze
	if (index == 8)
		ColorValue = "#fab1a0"; // first date
	if (index == 9)
		ColorValue = "#ffeaa7"; // sour lemon
	if (index == 10)
		ColorValue = "#D6A2E8"; // bright ube

	document.getElementsByTagName("body")[0].style.backgroundColor = ColorValue;
}