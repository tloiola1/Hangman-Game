document.getElementById("start").addEventListener("click", function(){
	document.getElementById("start").style.display="none";
	document.getElementById("section").style.display="initial";

getWord();

function getWord(){

var words = ["apple", "mango", "pinapple", "keyboard", "computer", "mouse"];

var tries = 10;

var win = 0;

var test = [];

var control = 0;

var pcPicked = words[Math.floor(Math.random() * words.length)];

var str = pcPicked;

for (var i = 0; i < pcPicked.length; i++) {
 	
 	test[i] = " _ ";
}

game(pcPicked, test, tries, win);

}

function game(pcPicked, test, tries, win){

	document.getElementById("tries").innerHTML = tries;
	document.getElementById("myWord").innerHTML = " " + test;

	
	document.onkeyup = function(event){

		var userGuess = event.key;

		if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
			userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

			document.getElementById("wrong").style.display= "initial";
	
		}

		else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){

			document.getElementById("wrong").style.display= "none";

			//Form Here
			var control = 0;
			
			for (var i = 0; i < pcPicked.length; i++) {
			
				if(pcPicked.charAt(i) == userGuess ){
					test[i] = userGuess;
					control = 1;
					win++;
					console.log(win);
				}

				if(win == pcPicked.length && test[i] !== " _ "){

					document.getElementById("win").style.display= "initial";

					document.getElementById("win").addEventListener("click", function(){

						document.getElementById("win").style.display= "none";

						document.getElementById("youChose").innerHTML = "";

						getWord();
					});
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


				getWord();

				});

			}	

		document.getElementById("startOver").style.display= "none";

		document.getElementById("myWord").innerHTML = test;

		document.getElementById("youChose").innerHTML = userGuess;


		}

	};

}//Game closing tag

// function startOver(){
// document.getElementById("startOver").addEventListener("click", function(){
	
// 	document.getElementById("startOver").style.display = "none";
// 	document.getElementById("gameOver").style.display = "none";
// 	document.getElementById("section").style.display = "initial";
// 	document.getElementById("youChose").innerHTML = " ";
// 	tries = 10;
// 	game();

// });
// }

});



// for(var i = 0; i <+ str.length; i++){
    
//     str = str.replace(str.charAt(i), "_");

// }