function play() {
	var form = document.getElementById("rpsForm");
	var userChoice = form.elements[0].value;
	var options = ["rock", "paper", "scissors"];
	var randomNumber = Math.floor(Math.random() * 3);
	var computerChoice = options[randomNumber];

	alert("The computers choice is " + computerChoice);
	if (userChoice == computerChoice) {
		document.getElementById("result").innerHTML = "It's a tie!";
		alert("It's a tie!");
	} else if (userChoice == "rock" && computerChoice == "scissors") {
		document.getElementById("result").innerHTML = "The user wins!";
		alert("The user wins!");
	} else if (userChoice == "rock" && computerChoice == "paper") {
		document.getElementById("result").innerHTML = "The Computer Wins!";
		alert("The computer wins!");
	} else if (userChoice == "paper" && computerChoice == "rock") {
		document.getElementById("result").innerHTML = "The user wins!";
		alert("The user wins!");
	} else if (userChoice == "paper" && computerChoice == "scissors") {
		document.getElementById("result").innerHTML = "The Computer Wins!";
		alert("The computer wins!");
	} else if (userChoice == "scissors" && computerChoice == "paper") {
		document.getElementById("result").innerHTML = "The user wins!";
		alert("The user wins!");
	} else if (userChoice == "scissors" && computerChoice == "rock") {
		document.getElementById("result").innerHTML = "The Computer Wins!";
		alert("The computer wins!");
	} else {
		alert("Invalid Input!");
	}
}

function playAgain() {
	window.location.reload();
}