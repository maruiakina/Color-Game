// JavaScript Document
var numSqrs = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {	
	// mode button setup
	setupModeButton();
	// squares setup
	setupSquares();	
	reset();
}

function setupModeButton(){
	for(var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
//			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqrs = 3: numSqrs = 6;
//			
//			if(this.textContent === "Easy") {
//				numSqrs = 3;	
//			} else if (this.textContent === "Medium") {
//				numSqrs = 6;
//			} else {
//				numSqrs = 9;
//			}
			
			reset();
		});
	}		
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {	
		// add click event to squares;
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			// compare clicked to picked	

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}

		});
	}	
}

function reset() {
	colors = generateRandomColors(numSqrs);
	// pick new random colors from arrays
	pickedColor = pickColor();
	// change colorDisplay to new picked
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
		// change each color to the picked one
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	
	for(var i = 0; i < num; i++) {
		// get random colors and push into arrays
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}

