let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) /2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let writeGuessToHTML= function(){
    guessValueElement.innerHTML = Math.round(guess);
}


let onButtonLowerPressed = function(){
    maxValue = guess;
    guess = (minValue + maxValue) /2;

    writeGuessToHTML();
}

let onButtonHigherPressed = function(){
    minValue = guess;
    guess = (minValue + maxValue) /2;

    writeGuessToHTML();
}

let onButtonSuccessPressed = function(){
    console.log("I've got it!!");
}


let main = function(){
    //document -> objeto que temos no js, dentro do browser, que da acesso a todo o docuemntoq ue está a ser visualzado. da um conjunto de metodos para fazer perguntas ao docuemnto
    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");

    guessValueElement = document.getElementById("guess");

    //innerHTML -> o que está escrito entre o início e o final da tag "span"
    //Defini como "----" inicialmente, mas dps destas atribuições, o valor vai trocar
    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;

    writeGuessToHTML();
}

main();

//console.log(guess);