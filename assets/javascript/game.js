var randomNum = 18 + Math.floor(Math.random() * 120);

$("#numToGuess").html(randomNum);
console.log(randomNum);

var garnet = 1 + Math.floor(Math.random() * 12);
var citrine = 1 + Math.floor(Math.random() * 12);
var opal = 1 + Math.floor(Math.random() * 12);
var amethyst = 1 + Math.floor(Math.random() * 12);

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 102)+19;
    garnet = 1 + Math.floor(Math.random() * 12)+1;
    citrine = 1 + Math.floor(Math.random() * 12)+1;
    opal = 1 + Math.floor(Math.random() * 12)+1;
    amethyst = 1 + Math.floor(Math.random() * 12)+1;
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("You won!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("Try Again!");
        $("#losses").html(losses);
        reset();
    }
};

$("#amethyst").on("click", function() {
    userTotal = userTotal + amethyst;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#opal").on("click", function() {
    userTotal = userTotal + opal;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#citrine").on("click", function() {
    userTotal = userTotal + citrine;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#garnet").on("click", function() {
    userTotal = userTotal + garnet;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})
