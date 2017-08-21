document.getElementById("start").addEventListener("click", function(){
	document.getElementById("start").style.display="none";
	document.getElementById("section").style.display="initial";


	game();

});

var words = ["apple", "mango", "pinapple"];

var tries = 10;

var test = [];

var control = 0;

function game(){



var pcPicked = words[Math.floor(Math.random() * words.length)];

var str = pcPicked;

for (var i = 0; i < pcPicked.length; i++) {
 	
 	test[i] = " _ ";
}


document.getElementById("myWord").innerHTML = " " + test;
document.getElementById("tries").innerHTML = "You Have " + tries + " tries.";

document.onkeyup = function(event){

var userGuess = event.key;

if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
	userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

	document.getElementById("wrong").style.display= "initial";
	
}

else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){

	document.getElementById("wrong").style.display= "none";

//Form Here

		for (var i = 0; i < pcPicked.length; i++) {
			
			if(pcPicked.charAt(i) == userGuess ){
					test[i] = userGuess;
			}

		}


	if(userGuess != pcPicked.charAt(i) ){
		tries--;
		document.getElementById("tries").innerHTML = "You Have " + tries + " tries.";
		
		if (tries < 1) {
		
			document.getElementById("startOver").style.display= "initial";
			document.getElementById("section").style.display="none";
			document.getElementById("startOver").innerHTML= "<h2>Game Over</h2> <p> <small>Try again</small></p>";
			startOver();
		}
	}

//To here	

	document.getElementById("startOver").style.display= "none";

	document.getElementById("myWord").innerHTML = test;

	document.getElementById("youChose").innerHTML = userGuess;


}

};

}//Game closing tag

function startOver(){
document.getElementById("startOver").addEventListener("click", function(){
	
	document.getElementById("startOver").style.display = "none";
	document.getElementById("section").style.display = "initial";
	document.getElementById("youChose").innerHTML = " ";
	tries = 10;
	game();

});
}