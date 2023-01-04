// let randomNum1 = Math.floor(Math.random() * 6) + 1; // 1-6 
// let randomNum2 = Math.floor(Math.random() * 6) + 1; // 1-6 

// let randomImageSource = "images/" + "dice" + randomNum1 + ".png"; // images/dice1.png - images/dice6.png
// let randomImageSource2 = "images/" + "dice" + randomNum2 + ".png"; // images/dice1.png - images/dice6.png


// let image1 = document.querySelectorAll("img")[0];

//     image1.setAttribute("src", randomImageSource);

// let image2 = document.querySelectorAll("img")[1];

//     image2.setAttribute("src", randomImageSource2);


// if(randomNum1 > randomNum2){
//     document.querySelector("h1").innerHTML = "Player 1 wins!"
// }else if(randomNum1 < randomNum2){
//     document.querySelector("h1").innerHTML = "Player 2 wins!"
// }else{
//     document.querySelector("h1").innerHTML = "Draw!"
// }


///////// getting the buttons to work


let randomNum1 = Math.floor(Math.random() * 6) + 1; // 1-6 
// let randomImageSource = "images/" + "dice" + randomNum1 + ".png";
// let image1 = document.querySelectorAll("img")[0];

let randomNum2 = Math.floor(Math.random() * 6) + 1; // 1-6 
// let randomImageSource2 = "images/" + "dice" + randomNum2 + ".png";
// let image2 = document.querySelectorAll("img")[1];

document.querySelector(".btn1").addEventListener('click', roll1)

function roll1(){
    let randomNum1 = Math.floor(Math.random() * 6) + 1; // 1-6 
    let randomImageSource = "images/" + "dice" + randomNum1 + ".png";
    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}

document.querySelector(".btn2").addEventListener('click', roll2)

function roll2() {
    let randomNum2 = Math.floor(Math.random() * 6) + 1; // 1-6 
    let randomImageSource2 = "images/" + "dice" + randomNum2 + ".png";
    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

// if(randomNum1 > randomNum2){
//     document.querySelector("h1").innerHTML = "Player 1 wins!"
// }else if(randomNum1 < randomNum2){
//     document.querySelector("h1").innerHTML = "Player 2 wins!"
// }else{
//     document.querySelector("h1").innerHTML = "Draw!"
// }