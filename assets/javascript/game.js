



function game(pcPicked, array, word, tries, win, audioElement){

		document.getElementById("tries").innerHTML = tries;
		document.getElementById("theWordIs").innerHTML = " " + array;

	
		document.onkeyup = function(event){

			var userGuess = event.key;

			// THIS BLOCK EXECUTES IF USER INPUT IS NOT A VALID ALPHABETIC KEY EVENT - TO LINE 18
				if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
					userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

					//TEST IF LOSE IT WONT DISPLAY WHEN KEY EVENT HAPPENS
					if(tries > 0 && word < pcPicked) {document.getElementById("wrong").style.display= "initial";} 
				}
			// --------------------------------------------------------------------

			// THIS BLOCK EXECUTES IF USER INPUT IS A VALID ALPHABETC KEY EVENT - TO LINE 70
				else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){

					document.getElementById("wrong").style.display= "none";

					var control = 0;


					for (var i = 0; i < pcPicked.length; i++) {
				
						if(pcPicked.charAt(i) == userGuess ){

							array[i] = userGuess;
							control = 1;
						}
						

					}

					//THIS BLOCK TESTS IF USER WINS
						for (var j = 0; j < array.length; j++) {

							word = array.join('');

							if(word.length == pcPicked.length){
								winner(pcPicked);
							}
								
						}
					// -----------------------------

					// THIS BLOCK TESTS IF USER LOST 
						if(control == 0){

							tries--;
							document.getElementById("tries").innerHTML = tries;
						}
		
						if (control == 0 && tries == 0) {
			
							youLose(pcPicked, audioElement);
						}	
					// ------------------------------

					document.getElementById("startOver").style.display= "none";

					document.getElementById("theWordIs").innerHTML = array;

					document.getElementById("youChose").innerHTML = userGuess;
				}
				//-------------------------------------------------------
		};

}

//THIS FUNCTION RUNS IF USER WINS
function winner(pcPicked){

	document.getElementById("win").style.display = "initial";
	document.getElementById("winWord").innerHTML = pcPicked;

	document.getElementById("section").style.display= "none";

	document.getElementById("win").addEventListener("click", function(){

		document.getElementById("win").style.display= "none";
		document.getElementById("youChose").innerHTML = "";

		getStart();

	});

}

//THIS FUNCTION RUNS IF USER LOST
function youLose(pcPicked, audioElement){

		audioElement.play();

		document.getElementById("section").style.display = "none";
		
		document.getElementById("dead").style.display = "initial";
				
		document.getElementById("gameOver").style.display = "initial";

		document.getElementById("gameWord").innerHTML = pcPicked;

		document.getElementById("gameOver").addEventListener("click", function(){

			audioElement.pause();

			document.getElementById("gameOver").style.display = "none";
			
			document.getElementById("dead").style.display = "none";

			document.getElementById("section").style.display = "initial";
				
			document.getElementById("youChose").innerHTML = " ";

			getStart();

		});


}

// THIS FUNCTION GETS ALL THE ARGUMMENTS NEEDED TO START A GAME OR NEW GAME 
function getStart(){ 

		var words = ["apple", "mango", "pinapple", "keyboard", "computer", "mouse"];

		var tries = 10;

		var win = 0;

		var array = [];

		var word = [];

		var control = 0;

		var pcPicked = words[Math.floor(Math.random() * words.length)];

		var str = pcPicked;

		for (var i = 0; i < pcPicked.length; i++) {
		 	
		 	array[i] = " _ ";
		}
		
		document.getElementById("section").style.display="initial";

		var audioElement = document.createElement("audio");
      	audioElement.setAttribute("src", "assets/scary.mp3");

		game(pcPicked, array, word, tries, win, audioElement);
	}




// THIS AWAITS FOR THE USER TO CLICK ON START BUTTON TO START THE GAME
document.getElementById("start").addEventListener("click", function(){
	
	document.getElementById("start").style.display="none";
	document.getElementById("section").style.display="initial";

	getStart();

	



	

});