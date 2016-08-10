var luckyIndex;
var luckyForm;
var item;

function draw() {
	luckyForm = document.getElementById("luckyForm");
	luckyIndex = Math.floor(Math.random() * 9);
	item = luckyForm.elements[luckyIndex].value;
	document.getElementById("result").innerHTML = "The Lucky Winner is: " + item;
}