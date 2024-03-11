let points = 0;
let num1 = 0;
let num2 = 0;
let same = 0;
let input
let inputValue

function getRandom(){
    return Math.round(Math.random() * 10);
}

function reset() {
    num1 = getRandom();
    num2 = getRandom();
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    document.getElementById('points').innerHTML = points;
}

function submit() {
    input = document.getElementById("input");
    inputValue = input.value;
    if(inputValue == '>') {
        num1bigger();
    } else if(inputValue == '<') {
        num1smaller();
    } else if(inputValue == '=') {
        num1same();
    }
    document.getElementById('points').innerHTML = points;
    reset();
}

function num1same() {
    if(num1 - num2 == same) {
        points += 1;
    } else {
        points -= 1;
    }
}

function num1bigger() {
    if(num1 >= num2) {
        points += 1;
    } else {
        points -= 1;
    }
}

function num1smaller() {
    if(num1 <= num2) {
        points += 1;
    } else {
        points -= 1;
    }
}
