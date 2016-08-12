var board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
var turn = "X";
var Xwin = false;
var Owin = false;
var numMoves = 0;

function playMove(whichBox) {
  if (numMoves > 7) {
    if (!Xwin && !Owin) {
      alert("It's a tie!")
    }
    alert("Game Over");
  } else {
    numMoves += 1;
  }
  for (var i = 0; i < 9; i++) {
    if (whichBox == i) {
      document.getElementById("box" + i).innerHTML = turn;
      document.getElementById("box" + i).disabled = true;
      board[i] = turn;
    }
  }
  var row = 0;
  for (var i = 0; i <= 6; i += 3) {
    if (board[i] != "-" && board[i] == board[i + 1] && board[i + 1] == board[i + 2]) {
      if (board[i] == "X") {
        Xwin = true;
      } else {
        Owin = true;
      }
    }
  }
  for (var i = 0; i <= 2; i++) {
    if (board[i] != "-" && board[i] == board[i + 3] && board[i + 3] == board[i + 6]) {
      if (board[i] == "X") {
        Xwin = true;
      } else {
        Owin = true;
      }
    }
  }
  for (var i = 0, j = 4; i <= 2; i += 2, j -= 2) {
    if (board[i] != "-" && board[i] == board[i+j] && board[i+j] == board[i+2*j]) {
      if (board[i] == "X") {
        Xwin = true;
      } else{
        Owin = true;
      }
    }
  }
  
  if (Xwin == true) {
    alert("Player X has won!");
  } else if (Owin == true) {
    alert("Player O has won!");
  }
  
  if (Xwin || Owin) {
    for (var i = 0; i < 9; i++) {
      document.getElementById("box" + i).disabled = true;
    }
  }

  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }

}

function reload() {
  window.location.reload();
}

function home() {
  window.location.href = "../index.html";
}