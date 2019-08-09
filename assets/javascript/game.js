// Scoreboard at the beginning of the game and displays them on the screen

var wins = 0;
var losses = 0;
var yourScore = 0;

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#your-score").html(yourScore);

// Assigns random values between 1 and 12 to each gemstones. Ensures that at least one value is odd and one value is even to avoid outcome where all numbers are even, target score is odd, and winning is unachievable.

var oddValues = [1,3,5,7,9,11];
var evenValues = [2,4,6,8,10,12];

var rubyValue = oddValues[Math.floor(Math.random() * oddValues.length)];
var sapphireValue = Math.floor(Math.random() * 12) + 1;
var topazValue = Math.floor(Math.random() * 12) + 1;
var emeraldValue = evenValues[Math.floor(Math.random() * evenValues.length)];

console.log("Ruby Value: " + rubyValue);
console.log("Sapphire Value: " + sapphireValue);
console.log("Topaz Value: " + topazValue);
console.log("Emerald Value: " + emeraldValue);

// Assigns random value to target score between 19 and 120; displays it on the screen
var targetScore = Math.floor(Math.random() * 101) + 19;
$("#target-score").html("Target Score: " + targetScore);

$(document).ready(function() {
    //Adds each gemstone's random value to your score upon each click
    $("#ruby").on("click", function() {
        yourScore = yourScore + rubyValue;
        console.log("Your Score: " + yourScore)
        $("#your-score").html(yourScore);
    });
    $("#sapphire").on("click", function() {
        yourScore = yourScore + sapphireValue;
        console.log("Your Score: " + yourScore)
        $("#your-score").html(yourScore);
    });
    $("#topaz").on("click", function() {
        yourScore = yourScore + topazValue;
        console.log("Your Score: " + yourScore)
        $("#your-score").html(yourScore);
    });
    $("#emerald").on("click", function() {
        yourScore = yourScore + emeraldValue;
        console.log("Your Score: " + yourScore)
        $("#your-score").html(yourScore);
    });
});

// 
