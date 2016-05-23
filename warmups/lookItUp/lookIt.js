 var readline = require("readline-sync");

 var search = true;

 var wordArray = ["grease"];

 function AddWord(name, definition) {
     this.name = name;
     this.definition = definition;
 };

 var dictionary = [];

dictionary.push(new AddWord("grease", "grease is the word, is the word that you heard It\'s got a groove, it\'s got a meaning Grease is the time, is the place, is the motion Grease is the way we are feeling"));

 function wordCheck() {

     var word = readline.question("Enter a 'word' to look it up. Enter q to quit: ");

     var wordIndex = wordArray.indexOf(word.toLowerCase());

     if (word === "q") {
         search = false;
     } else if (wordIndex === -1) {
         wordArray.push(word);
         var definiton = readline.question(word + " is not in the dictinonary please enter the definition. ");
         dictionary.push(new AddWord(word, definiton));
         console.log("thanks for adding " + word + " to the bektionary.")
     } else {
         console.log(dictionary[wordIndex].definition);
     }
 }
 while (search) {
     wordCheck();
 };