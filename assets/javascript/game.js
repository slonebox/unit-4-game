
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

//Retrieves random values for the gemstones and the target score
function getOddValues() {
    return oddValues[Math.floor(Math.random() * oddValues.length)];
}
function getEvenValues() {
    return evenValues[Math.floor(Math.random() * evenValues.length)];
}
function getRandomValues() {
    return Math.floor(Math.random() * 12) + 1;
}
function getTargetScore() {
    return Math.floor(Math.random() * 101) + 19;
}

var rubyValue = getOddValues();
var sapphireValue = getRandomValues();
var topazValue = getRandomValues();
var emeraldValue = getEvenValues();

console.log("Ruby Value: " + rubyValue);
console.log("Sapphire Value: " + sapphireValue);
console.log("Topaz Value: " + topazValue);
console.log("Emerald Value: " + emeraldValue);

// Assigns random value to target score between 19 and 120; displays it on the screen
var targetScore = getTargetScore();
$("#target-score").html("Target Score: " + targetScore);

//Resets your score and generates new random values for the next game
function resetGame() {
    yourScore = 0;
    rubyValue = getOddValues();
    sapphireValue = getRandomValues();
    topazValue = getRandomValues();
    emeraldValue = getEvenValues();
    targetScore = getTargetScore();
    $("#target-score").html("Target Score: " + targetScore);
    console.log("Ruby Value: " + rubyValue);
    console.log("Sapphire Value: " + sapphireValue);
    console.log("Topaz Value: " + topazValue);
    console.log("Emerald Value: " + emeraldValue);
};

// Checks if game should continue based on your score vs. the target score
function checkScore() {
    if (yourScore === targetScore) {
        alert("Congratulations! You won!");
        wins++;
        $("#wins").html(wins);
        $("#wins").html("Wins: " + wins);
        resetGame();
    } else if (yourScore > targetScore) {
        alert("You lose! Dummy!");
        losses++;
        $("#losses").html("Losses: " + losses);
        resetGame();
    };
};

//Adds each gemstone's random value to your score upon each click
$(document).ready(function() {

        $("#ruby").on("click", function() {
            yourScore = yourScore + rubyValue;
            console.log("Your Score: " + yourScore)
            $("#your-score").html(yourScore);
            checkScore();
        });
        $("#sapphire").on("click", function() {
            yourScore = yourScore + sapphireValue;
            console.log("Your Score: " + yourScore)
            $("#your-score").html(yourScore);
            checkScore();
        });
        $("#topaz").on("click", function() {
            yourScore = yourScore + topazValue;
            console.log("Your Score: " + yourScore)
            $("#your-score").html(yourScore);
            checkScore();
        });
        $("#emerald").on("click", function() {
            yourScore = yourScore + emeraldValue;
            console.log("Your Score: " + yourScore)
            $("#your-score").html(yourScore);
            checkScore();
        });

});
