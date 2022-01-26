var randomNumber1=Math.floor(Math.random() * 6) +1;
var randomImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomImage;
var image= document.querySelectorAll("img")[0];
image.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random() * 6) +1;
var randomImage="dice" + randomNumber2 + ".png";
var randomImageSource="images/" + randomImage;
var image= document.querySelectorAll("img")[1];
image.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML = ("🚩 Play 1 Wins!");

}
else if(randomNumber1<randomNumber2)

{document.querySelector("h1").innerHTML = ("Player 2 Wins! 🚩");

}
else
{  document.querySelector("h1").innerHTML = ("Draw!");
}
