// var userChoice = prompt("What is your move!");
var userChoice = document.getElementById("rpsForm").elements[0].value;
userChoice = userChoice.toLowerCase();

var computerChoice;

var options = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * 3);

computerChoice = options[randomNumber];

if (userChoice == computerChoice) {

} else if (userChoice == "rock" && computerChoice == "scissors") {
	document.getElementById("result").innerHTML = "The user wins!";
	alert("The user wins!")
} else if (userChoice == "rock" && computerChoice == "paper") {
	document.getElementById("result").innerHTML = "The Computer Wins!";
	alert("The computer wins!")
} else if (userChoice == "paper" && computerChoice == "rock") {
	document.getElementById("result").innerHTML = "The user wins!";
	alert("The user wins!")
} else if (userChoice == "paper" && computerChoice == "scissors") {
	document.getElementById("result").innerHTML = "The Computer Wins!";
	alert("The computer wins!")
} else if (userChoice == "scissors" && computerChoice == "paper") {
	document.getElementById("result").innerHTML = "The user wins!";
	alert("The user wins!")
} else if (userChoice == "scissors" && computerChoice == "rock") {
	document.getElementById("result").innerHTML = "The Computer Wins!";
	alert("The computer wins!")
} else {
	alert("Invalid Input!");
}
function playAgain() {
	window.location.reload();
}