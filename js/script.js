/*global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
		
	function setenceToPigLatin(){
		// var vowels = ["a", "e", "i", "o", "u"]
		var sentence = $("#userInput").val();
		sentence = sentence.toString().toLowerCase();
		var wordsArray = sentence.split(" ");
		for(var i = 0; i < wordsArray.length; i++){
			var char = wordsArray[i][0];
			var secondChar = wordsArray[i][1];
			var pigLatinized;
			if(char==="a" || char === "e" || char === "i" || char === "o" || char === "u"){
				pigLatinized = wordsArray[i] + "yay";
			}
			else if(char==="s" && secondChar==="h"){
				var finalWord =wordsArray[i].substr(2);
				pigLatinized = finalWord+char+secondChar+"ay";
			}
			else{
				finalWord =wordsArray[i].substr(1);
				pigLatinized = finalWord+char+"ay";
			}
			$("#result").append(pigLatinized + " ");
		}
	}
	
	
	function sentenceToEnglish (){
		var sentence = $("#userInputTwo").val();
		var sentenceWords = sentence.split(" ");
		
		for(var i = 0; i<sentenceWords.length;i++){
			var l = (sentenceWords[i].length);
			var n = l -3;
			var lastLetter = sentenceWords[i][n];
			
			if (sentenceWords[i][l-1] !=="y" && sentenceWords[i][l-2] !== "a"){
				alert("Invalid Input, try again");
                $("input[type=text], textarea").val("");
                return null;
			}
			
			
			if (lastLetter==="y"){
				newWord = sentenceWords[i].slice(0,-3);
				var Englished = newWord;
			}
			else if(lastLetter !== "a" || lastLetter !== "e" || lastLetter !== "i" || lastLetter !== "o" || lastLetter !== "u"){
				var newWord = sentenceWords[i].slice(0,-3);
				
				var Englished = lastLetter + newWord;
			}
			
			$("#resultTwo").append(Englished + " ");
		}
	}
	
	$("#userInput").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#translate").click();
        }
    });
	
	$("#translate").click(function(){
		$("#result").html("");
		setenceToPigLatin();
	});
	
	$("#restart").click(function() {
	   $("#result").html("");
	   
	   $("#userInput").val("");
	});
	
	$("#userInputTwo").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#untranslate").click();
        }
    });

	$("#untranslate").click(function() {
	   sentenceToEnglish(); 
	});





});