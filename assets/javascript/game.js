
document.getElementById("start").addEventListener("click", function(){
	
	document.getElementById("start").style.display="none";
	document.getElementById("section").style.display="initial";

	getStart();

	function getStart(){ 

		var words = ["apple", "mango", "pinapple", "keyboard", "computer", "mouse"];

		var tries = 10;

		var win = 0;

		var array = [];

		var control = 0;

		var pcPicked = words[Math.floor(Math.random() * words.length)];

		var str = pcPicked;

		for (var i = 0; i < pcPicked.length; i++) {
		 	
		 	array[i] = " _ ";
		}
		
		document.getElementById("section").style.display="initial";

		game(pcPicked, array, tries, win);
	}



	function game(pcPicked, array, tries, win){

		document.getElementById("tries").innerHTML = tries;
		document.getElementById("theWordIs").innerHTML = " " + array;

	
		document.onkeyup = function(event){

			var userGuess = event.key;

			if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
				userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

				document.getElementById("wrong").style.display= "initial";
			}

			else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){

				document.getElementById("wrong").style.display= "none";

				var control = 0;

				for (var i = 0; i < pcPicked.length; i++) {
			
					if(pcPicked.charAt(i) == userGuess ){

						array[i] = userGuess;
						control = 1;
						win++;
						
					}
					for (var j = 0; j < pcPicked.length; j++) {

						if(pcPicked.charAt(j) == array[j] && win == pcPicked.length){

							document.getElementById("win").style.display = "initial";
							document.getElementById("winWord").innerHTML = pcPicked;

							document.getElementById("section").style.display= "none";

							document.getElementById("win").addEventListener("click", function(){

								document.getElementById("win").style.display= "none";
								document.getElementById("youChose").innerHTML = "";

								getStart();

							});
						}
					}

				}


				if(control == 0){

					tries--;
					document.getElementById("tries").innerHTML = tries;
				}
	
				if (control == 0 && tries == 0) {
		
				document.getElementById("section").style.display = "none";
				
				document.getElementById("gameOver").style.display = "initial";

				document.getElementById("gameWord").innerHTML = pcPicked;

				document.getElementById("gameOver").addEventListener("click", function(){

				document.getElementById("gameOver").style.display = "none";
				
				document.getElementById("section").style.display = "initial";
				
				document.getElementById("youChose").innerHTML = " ";


				getStart();

				});

				}	

				document.getElementById("startOver").style.display= "none";

				document.getElementById("theWordIs").innerHTML = array;

				document.getElementById("youChose").innerHTML = userGuess;


			}

		};

}

});