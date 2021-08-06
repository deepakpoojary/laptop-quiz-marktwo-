var readlineSync = require("readline-sync");
var score =0;

//name and welcome him to this quiz title

var userName = readlineSync.question("whats your name: ");

console.log("welcome to this Laptop quiz "+ userName);


var userAnswer1 = readlineSync.question("where do we lesser price for the same laptop ");
var Answer1 = "online";
test(userAnswer1,Answer1);

var userAnswer2 = readlineSync.question("how much gb of ram is recommended for most laptops these days ");
var Answer2 = "8 gb";
test(userAnswer2,Answer2);

var userAnswer3 = readlineSync.question("which companies have the best integrated graphics card ");
var Answer3 = "amd";
test(userAnswer3,Answer3);

var userAnswer4 = readlineSync.question("which is the best processor for 40k budget range ");
var Answer4 = "ryzen 5";
test(userAnswer4,Answer4);






function test (userAnswer,Answer){
  if(userAnswer===Answer){
    score++;
    console.log("You are right");
    console.log("Your score is "+ score);
  }
  else{
    console.log("You are wrong");
    console.log("Your score is "+ score);
  }
}
