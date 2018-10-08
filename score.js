var p1 = document.querySelector("#btn-p1");
var p2 = document.querySelector("#btn-p2");
var span1 =document.querySelector("#span1");
var span2 =document.querySelector("#span2");
var reset =document.querySelector("#reset");
var input =document.querySelector("input");
var span3 =document.querySelector("#span3");
var p1ScoreValue = 0;
var p2ScoreValue = 0;
var gameOver = false;
var winnerScore = 5;

p1.addEventListener("click", function(){
	playerOne();
});

p2.addEventListener("click", function(){
	playerTwo();
});

reset.addEventListener("click", function(){
	resetFunc();
});

input.addEventListener("change", function(){
	span3.textContent=input.value;
	winnerScore=Number(input.value);
	resetFunc();
});




// ******   Funtion definitions *******




function playerOne(){
	if (!gameOver) {
		p1ScoreValue++;
		span1.textContent = p1ScoreValue;
		if (p1ScoreValue === winnerScore) {
			gameOver = !gameOver;
			span1.classList.add("winner");
		}
	}
}

function playerTwo(){
	if (!gameOver) {
		p2ScoreValue++;
		span2.textContent = p2ScoreValue;
		if (p2ScoreValue === winnerScore) {
			gameOver = true;
			span2.classList.add("winner");
		}
	}
}

function resetFunc(){
	p1ScoreValue = 0;
	p2ScoreValue = 0;
	span1.textContent= p1ScoreValue;
	span2.textContent= p2ScoreValue;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
	gameOver = false;
}
