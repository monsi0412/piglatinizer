/*global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
		
	function setenceToPigLatin(){
		var sentence = $("#userInput").val();
		var wordsArray = sentence.split(" ");
		for(var i = 0; i < wordsArray.length; i++){
			var char = wordsArray[i][0];
			if(char==="a" || char === "e" || char === "i" || char === "o" || char === "u"){
				var pigLatinized = wordsArray[i] + "yay";
			}
			else{
				var finalWord =wordsArray[i].substr(1);
				pigLatinized = finalWord+char+"ay";
			}
			$("#result").append(pigLatinized + " ");
		}
		
	}
	
	$("#userInput").keyup(function(event) {
        if (event.keyCode === 13) {
            $("button").click();
        }
    });
	
	$("button").click(function(){
		// var endResult = setenceToPigLatin();
		// $("#result").html(endResult);
		setenceToPigLatin();
	});





// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
	// function wordToPigLatin(word){
	// 	var first = str.substr(0);
	// 	if(first === "a" || first === 'e' || first === 'i' || first === 'o' || first === 'u'){
	// 		return word + "yay";
	// 	}}




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

	


});