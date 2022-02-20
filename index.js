var diceValue1 = Math.floor(Math.random()*6)+1
var diceValue2 = Math.floor(Math.random()*6)+1

document.querySelector(".dice1").setAttribute("src", "images/dice" + diceValue1 + ".png");
document.querySelector(".dice2").setAttribute("src", "images/dice" + diceValue2 + ".png");

if(diceValue1 > diceValue2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}else if(diceValue1 < diceValue2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
