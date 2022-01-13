/*
var currentNumW = document.getElementById('currentNumber');
var currentNum = 0;


function increment(){
    currentNum += 1;
    currentNumW.innerHTML = currentNum;
}

function decrement(){
    currentNum -= 1;
    currentNumW.innerHTML = currentNum;
} */

var currentNum = 0;
var currentNumW = document.getElementById('currentNumber');

document.getElementById("adicionar").addEventListener("click", function(){
    if(currentNum <10){
    currentNum += 1;
    currentNumW.innerHTML = currentNum;
    }
    if(currentNum > 0){
        var currentNumCss = document.getElementById("currentNumber");
        currentNumCss.style.color = 'black';
    }
});

document.getElementById("subtrair").addEventListener("click", function (){
    if(currentNum > -10){
    currentNum -= 1;
    currentNumW.innerHTML = currentNum;
    }
    if(currentNum < 0){
        var currentNumCss = document.getElementById("currentNumber");
        currentNumCss.style.color = 'red';
        currentNumCss.style.paddingTop = '10px';
    }
});