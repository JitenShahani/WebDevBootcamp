function setBackground() {
	window.setTimeout("setbackground()", 5000); // 5000 milliseconds delay
	let index = Math.round(Math.random() * 9);
	let ColorValue = "FFFFFF"; // default color - white (index = 0)

	if (index == 1)
		ColorValue = "81ecec"; //peach
	if (index == 2)
		ColorValue = "00cec9"; //violet
	if (index == 3)
		ColorValue = "74b9ff"; //lt blue
	if (index == 4)
		ColorValue = "0984e3"; //cyan
	if (index == 5)
		ColorValue = "6c5ce7"; //tan
	if (index == 6)
		ColorValue = "a29bfe"; //lt green
	if (index == 7)
		ColorValue = "55efc4"; //lt yellow
	if (index == 8)
		ColorValue = "b2bec3"; //lt orange
	if (index == 9)
		ColorValue = "636e72"; //lt grey

	document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}