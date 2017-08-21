document.getElementById("start").addEventListener("click", function(){
	document.getElementById("start").style.display= "none";

	game();

});

var words = ["apple", "mango", "pinapple"];

var wins = 0;
var tries = 10;



function game(){



var pcPicked = words[Math.floor(Math.random() * words.length)];

var str = pcPicked;

var test = [];



for (var i = 0; i < pcPicked.length; i++) {
 	
 	test[i] = " _ ";
}


document.getElementById("myWord").innerHTML = "  " + test;
document.getElementById("losses").innerHTML = "You Have " + tries + " tries.";

document.onkeyup = function(event){

var userGuess = event.key;

if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
	userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

	document.getElementById("startOver").style.display= "initial";
}

else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){
	var a;
	var b = -1;
	var str = pcPicked;

	var pos = str.indexOf(userGuess);

		for (var i = 0; i < pcPicked.length; i++) {
			
			if(pcPicked.charAt(i) == userGuess ){
					test[i] = userGuess;
			}
		}
	
	
	document.getElementById("startOver").style.display= "none";

	document.getElementById("myWord").innerHTML = test;

	document.getElementById("youChose").innerHTML = userGuess;



	
	if( > -1){
	document.getElementById("has").innerHTML = wins;
	
	}

	else {
	tries--;
	document.getElementById("losses").innerHTML = "You Have " + tries + " tries.";
	if (tries < 1) {
		document.getElementById("startOver").style.display= "initial";
		document.getElementById("startOver").innerHTML= "<big>Game Over</big> <br> <small>Try again</small>";
		startOver();
	}
	}
}

};

}//Game closing tag

function startOver(){
document.getElementById("startOver").addEventListener("click", function(){
	
	document.getElementById("startOver").style.display= "none";
	tries = 10;
	game();

});
}