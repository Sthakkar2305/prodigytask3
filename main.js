
function myfun() {


	var a1, a2, a3, a4, a5, a6, a7, a8, a9;
	a1 = document.getElementById("a1").value;
	a2 = document.getElementById("a2").value;
	a3 = document.getElementById("a3").value;
	a4 = document.getElementById("a4").value;
	a5 = document.getElementById("a5").value;
	a6 = document.getElementById("a6").value;
	a7 = document.getElementById("a7").value;
	a8 = document.getElementById("a8").value;
	a9 = document.getElementById("a9").value;

	var a1btn, a2btn, a3btn, a4btn, a5btn,
		a6btn, a7btn, a8btn, a9btn;
		
	a1btn = document.getElementById("a1");
	a2btn = document.getElementById("a2");
	a3btn = document.getElementById("a3");
	a4btn = document.getElementById("a4");
	a5btn = document.getElementById("a5");
	a6btn = document.getElementById("a6");
	a7btn = document.getElementById("a7");
	a8btn = document.getElementById("a8");
	a9btn = document.getElementById("a9");

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
		a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		
        a4btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a1btn.style.color = "green";
		a2btn.style.color = "green";
		a3btn.style.color = "green";
	}
	else if ((a1 == 'x' || a1 == 'X') && (a4 == 'x' ||
		a4 == 'X') && (a7 == 'x' || a7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		a2btn.disabled = true;
		a3btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a1btn.style.color = "green";
		a4btn.style.color = "green";
		a7btn.style.color = "green";
	}
	else if ((a7 == 'x' || a7 == 'X') && (a8 == 'x' ||
		a8 == 'X') && (a9 == 'x' || a9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";

		a1btn.disabled = true;
		a2btn.disabled = true;
		a3btn.disabled = true;
		a4btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;

		a7btn.style.color = "green";
		a8btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a3 == 'x' || a3 == 'X') && (a6 == 'x' ||
		a6 == 'X') && (a9 == 'x' || a9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";

		a1btn.disabled = true;
		a2btn.disabled = true;
		a4btn.disabled = true;
		a5btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;

		a3btn.style.color = "green";
		a6btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a1 == 'x' || a1 == 'X') && (a5 == 'x' ||
		a5 == 'X') && (a9 == 'x' || a9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		a2btn.disabled = true;
		a3btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;

		a1btn.style.color = "green";
		a5btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a3 == 'x' || a3 == 'X') && (a5 == 'x' ||
		a5 == 'X') && (a7 == 'x' || a7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a3btn.style.color = "green";
		a5btn.style.color = "green";
		a7btn.style.color = "green";
	}
	else if ((a2 == 'x' || a2 == 'X') && (a5 == 'x' ||
		a5 == 'X') && (a8 == 'x' || a8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a9btn.disabled = true;

		a2btn.style.color = "green";
		a5btn.style.color = "green";
		a8btn.style.color = "green";
	}
	else if ((a4 == 'x' || a4 == 'X') && (a5 == 'x' ||
		a5 == 'X') && (a6 == 'x' || a6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a3btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a4btn.style.color = "green";
		a5btn.style.color = "green";
		a6btn.style.color = "green";
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((a1 == '0' || a1 == '0') && (a2 == '0' ||
		a2 == '0') && (a3 == '0' || a3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a4btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a1btn.style.color = "green";
		a2btn.style.color = "green";
		a3btn.style.color = "green";
	}
	else if ((a1 == '0' || a1 == '0') && (a4 == '0' ||
		a4 == '0') && (a7 == '0' || a7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a2btn.disabled = true;
		a3btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a1btn.style.color = "green";
		a4btn.style.color = "green";
		a7btn.style.color = "green";
	}
	else if ((a7 == '0' || a7 == '0') && (a8 == '0' ||
		a8 == '0') && (a9 == '0' || a9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a3btn.disabled = true;
		a4btn.disabled = true;
		a5btn.disabled = true;
		a6btn.disabled = true;

		a7btn.style.color = "green";
		a8btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a3 == '0' || a3 == '0') && (a6 == '0' ||
		a6 == '0') && (a9 == '0' || a9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a4btn.disabled = true;
		a5btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;
		a3btn.style.color = "green";
		a6btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a1 == '0' || a1 == '0') && (a5 == '0' ||
		a5 == '0') && (a9 == '0' || a9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a2btn.disabled = true;
		a3btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;

		a1btn.style.color = "green";
		a5btn.style.color = "green";
		a9btn.style.color = "green";
	}
	else if ((a3 == '0' || a3 == '0') && (a5 == '0' ||
		a5 == '0') && (a7 == '0' || a7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a3btn.style.color = "green";
		a5btn.style.color = "green";
		a7btn.style.color = "green";
	}
	else if ((a2 == '0' || a2 == '0') && (a5 == '0' ||
		a5 == '0') && (a8 == '0' || a8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a1btn.disabled = true;
		a3btn.disabled = true;
		a4btn.disabled = true;
		a6btn.disabled = true;
		a7btn.disabled = true;
		a9btn.disabled = true;

		a2btn.style.color = "green";
		a5btn.style.color = "green";
		a8btn.style.color = "green";
	}
	else if ((a4 == '0' || a4 == '0') && (a5 == '0' ||
		a5 == '0') && (a6 == '0' || a6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		a1btn.disabled = true;
		a2btn.disabled = true;
		a3btn.disabled = true;
		a7btn.disabled = true;
		a8btn.disabled = true;
		a9btn.disabled = true;

		a4btn.style.color = "green";
		a5btn.style.color = "green";
		a6btn.style.color = "green";
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((a1 == 'X' || a1 == '0') && (a2 == 'X'
		|| a2 == '0') && (a3 == 'X' || a3 == '0') &&
		(a4 == 'X' || a4 == '0') && (a5 == 'X' ||
			a5 == '0') && (a6 == 'X' || a6 == '0') &&
		(a7 == 'X' || a7 == '0') && (a8 == 'X' ||
			a8 == '0') && (a9 == 'X' || a9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Match Tie";
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfun2() {
	location.reload();
	a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = '';
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfun3() {
	if (flag == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a1").value = "0";
		document.getElementById("a1").disabled = true;
		flag = 1;
	}
}

function myfun4() {
	if (flag == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a2").value = "0";
		document.getElementById("a2").disabled = true;
		flag = 1;
	}
}

function myfun5() {
	if (flag == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a3").value = "0";
		document.getElementById("a3").disabled = true;
		flag = 1;
	}
}

function myfun6() {
	if (flag == 1) {
		document.getElementById("a4").value = "X";
		document.getElementById("a4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a4").value = "0";
		document.getElementById("a4").disabled = true;
		flag = 1;
	}
}

function myfun7() {
	if (flag == 1) {
		document.getElementById("a5").value = "X";
		document.getElementById("a5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a5").value = "0";
		document.getElementById("a5").disabled = true;
		flag = 1;
	}
}

function myfun8() {
	if (flag == 1) {
		document.getElementById("a6").value = "X";
		document.getElementById("a6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a6").value = "0";
		document.getElementById("a6").disabled = true;
		flag = 1;
	}
}

function myfun9() {
	if (flag == 1) {
		document.getElementById("a7").value = "X";
		document.getElementById("a7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a7").value = "0";
		document.getElementById("a7").disabled = true;
		flag = 1;
	}
}

function myfun10() {
	if (flag == 1) {
		document.getElementById("a8").value = "X";
		document.getElementById("a8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a8").value = "0";
		document.getElementById("a8").disabled = true;
		flag = 1;
	}
}

function myfun11() {
	if (flag == 1) {
		document.getElementById("a9").value = "X";
		document.getElementById("a9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a9").value = "0";
		document.getElementById("a9").disabled = true;
		flag = 1;
	}
}
