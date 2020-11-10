let ledboard = [];

let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) /2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let interval = undefined;
let changeCallCount = 0;

let change = function(){

    let colors = ['#893DC4', '#75427AA', '#437116', '#111223', '#347883', '#BB1312', '#AAAAAA'];

    //Para depois de chegar aos 100
    changeCallCount++;
    if(changeCallCount > 10){
        clearInterval(interval);
        changeCallCount = 0;

        //window -> objeto que representa a janela do browser
        //location -> onde o browser está no momento (página que está a ser carregada)
        //reload() -> recarregar a página
        window.location.reload();
    }

    ledboard.forEach(function(x){

        x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    });
}


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

    let victoryDiv = document.getElementById("victory");
    victoryDiv.classList.remove("d-none");

    //---(função chamada, milisegundos)
    interval = setInterval(change, 80);
}


let main = function(){
    ledboard = Array.from( document.getElementsByClassName("block") );


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